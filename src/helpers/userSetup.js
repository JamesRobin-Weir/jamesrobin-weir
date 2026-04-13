const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const slugify = require("@sindresorhus/slugify");
const axios = require("axios");
const { parse } = require("node-html-parser");

const NOTES_ROOT = path.resolve("./src/site/notes");
const DEFAULT_NOTE_ICON = process.env.NOTE_ICON_DEFAULT || "";
const SMILES_RENDER_SERVER = "https://lifescience.opensource.epam.com";
const SMILES_RENDER_ENDPOINT = "/v2/indigo/render";
const SMILES_ACCEPT = "image/png;base64";
const SMILES_WIDTH_PX = 300;

let noteIndexCache = null;
const smilesRenderCache = new Map();

function userMarkdownSetup(md) {
  const originalFence =
    md.renderer.rules.fence ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options, env, self);
    };

  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const info = String(token.info || "").trim();

    if (info === "smiles") {
      return `<div class="smiles-render-block" data-smiles="${encodeURIComponent(
        token.content || ""
      )}"></div>`;
    }

    return originalFence(tokens, idx, options, env, self);
  };
}

function normalizeRelativePath(filePath) {
  return String(filePath || "")
    .replaceAll("\\", "/")
    .replace(/^(\.\/)+/, "")
    .replace(/^src\/site\/notes\//, "")
    .replace(/^notes\//, "")
    .replace(/\.(md|markdown)$/i, "")
    .trim();
}

function getAllMarkdownFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMarkdownFiles(fullPath));
    } else if (/\.(md|markdown)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

function buildNoteIndex() {
  if (noteIndexCache) {
    return noteIndexCache;
  }

  const exactMap = new Map();
  const baseNameMap = new Map();

  if (!fs.existsSync(NOTES_ROOT)) {
    noteIndexCache = { exactMap, baseNameMap };
    return noteIndexCache;
  }

  for (const fullPath of getAllMarkdownFiles(NOTES_ROOT)) {
    const relativePath = normalizeRelativePath(path.relative(NOTES_ROOT, fullPath));
    const baseName = path.basename(relativePath);
    exactMap.set(relativePath.toLowerCase(), fullPath);

    const existing = baseNameMap.get(baseName.toLowerCase()) || [];
    existing.push(fullPath);
    baseNameMap.set(baseName.toLowerCase(), existing);
  }

  noteIndexCache = { exactMap, baseNameMap };
  return noteIndexCache;
}

function resolveNoteFile(filePath) {
  const normalized = normalizeRelativePath(filePath);
  if (!normalized) {
    return null;
  }

  const { exactMap, baseNameMap } = buildNoteIndex();
  const exactMatch = exactMap.get(normalized.toLowerCase());
  if (exactMatch) {
    return exactMatch;
  }

  const baseName = path.basename(normalized).toLowerCase();
  const candidates = baseNameMap.get(baseName) || [];

  if (candidates.length === 1) {
    return candidates[0];
  }

  return null;
}

function getAnchorAttributes(filePath, linkTitle) {
  let rawFileName = String(filePath || "").replaceAll("&amp;", "&").trim();
  let fileName = rawFileName;
  let header = "";
  let headerLinkPath = "";

  if (rawFileName.includes("#")) {
    [fileName, header] = rawFileName.split("#");
    headerLinkPath = `#${slugify(header)}`;
  }

  const title = linkTitle && String(linkTitle).trim() ? String(linkTitle).trim() : fileName;
  let noteIcon = DEFAULT_NOTE_ICON;
  let permalink = `/notes/${slugify(fileName)}`;
  let deadLink = false;

  try {
    const resolvedFile = resolveNoteFile(fileName);
    if (!resolvedFile) {
      deadLink = true;
    } else {
      const file = fs.readFileSync(resolvedFile, "utf8");
      const frontMatter = matter(file);

      if (frontMatter.data.permalink) {
        permalink = frontMatter.data.permalink;
      }
      if (
        frontMatter.data.tags &&
        Array.isArray(frontMatter.data.tags) &&
        frontMatter.data.tags.indexOf("gardenEntry") !== -1
      ) {
        permalink = "/";
      }
      if (frontMatter.data.noteIcon) {
        noteIcon = frontMatter.data.noteIcon;
      }
    }
  } catch {
    deadLink = true;
  }

  if (deadLink) {
    return {
      attributes: {
        class: "internal-link is-unresolved",
        href: "/404",
        target: "",
      },
      innerHTML: title,
    };
  }

  return {
    attributes: {
      class: "internal-link",
      target: "",
      "data-note-icon": noteIcon,
      href: `${permalink}${headerLinkPath}`,
    },
    innerHTML: title,
  };
}

function getAnchorLink(filePath, linkTitle) {
  const { attributes, innerHTML } = getAnchorAttributes(filePath, linkTitle);
  return `<a ${Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")}>${innerHTML}</a>`;
}

function replaceGraphlessLinks(text) {
  return text.replace(/\{\{([^{}|]+?)(?:\|([^{}]+?))?\}\}/g, (match, fileLink, linkTitle) => {
    const cleanedFileLink = String(fileLink || "").trim();
    const cleanedLinkTitle = linkTitle == null ? undefined : String(linkTitle).trim();

    if (!cleanedFileLink) {
      return match;
    }

    if (/[<>={}]/.test(cleanedFileLink)) {
      return match;
    }

    return getAnchorLink(cleanedFileLink, cleanedLinkTitle);
  });
}

function protectHtmlBlocks(html) {
  const protectedBlocks = [];
  const pattern = /<(pre|code|a|script|style|textarea)\b[^>]*>[\s\S]*?<\/\1>/gi;
  const protectedHtml = html.replace(pattern, (block) => {
    const token = `%%GRAPHLESS_PROTECTED_${protectedBlocks.length}%%`;
    protectedBlocks.push(block);
    return token;
  });
  return { protectedHtml, protectedBlocks };
}

function restoreHtmlBlocks(html, protectedBlocks) {
  return html.replace(/%%GRAPHLESS_PROTECTED_(\d+)%%/g, (_, index) => protectedBlocks[Number(index)]);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function fetchSmilesBase64(smiles) {
  const normalized = String(smiles || "").trim();
  if (!normalized) {
    return null;
  }

  if (!smilesRenderCache.has(normalized)) {
    smilesRenderCache.set(
      normalized,
      (async () => {
        const response = await axios.post(
          `${SMILES_RENDER_SERVER}${SMILES_RENDER_ENDPOINT}`,
          {
            struct: normalized,
            query: "",
            output_format: SMILES_ACCEPT,
            options: {},
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: SMILES_ACCEPT,
            },
            responseType: "text",
            timeout: 20000,
            validateStatus: () => true,
          }
        );

        if (response.status >= 400 || typeof response.data !== "string" || !response.data.trim()) {
          throw new Error(`SMILES render request failed with status ${response.status}`);
        }

        return response.data.trim();
      })().catch((error) => {
        smilesRenderCache.delete(normalized);
        throw error;
      })
    );
  }

  return smilesRenderCache.get(normalized);
}

function renderSmilesFallback(smilesText) {
  return `<pre><code class="language-smiles">${escapeHtml(smilesText)}</code></pre>`;
}

async function renderSmilesBlockHtml(smilesText) {
  const lines = String(smilesText || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    return renderSmilesFallback(smilesText);
  }

  const images = [];

  for (const smiles of lines) {
    try {
      const base64 = await fetchSmilesBase64(smiles);
      if (!base64) {
        return renderSmilesFallback(smilesText);
      }

      images.push(
        `<img class="chemical-structure-image" src="data:image/png;base64,${base64}" alt="Chemical structure rendered from SMILES: ${escapeHtml(
          smiles
        )}" loading="lazy" decoding="async" width="${SMILES_WIDTH_PX}" style="width:${SMILES_WIDTH_PX}px;max-width:100%;height:auto;" />`
      );
    } catch {
      return renderSmilesFallback(smilesText);
    }
  }

  return `<div class="chemical-structure-container">${images.join("")}</div>`;
}

function userEleventySetup(eleventyConfig) {
  eleventyConfig.addTransform("graphless-curly-links", function (str, outputPath) {
    if (!str || !outputPath || !outputPath.endsWith(".html")) {
      return str;
    }

    const { protectedHtml, protectedBlocks } = protectHtmlBlocks(str);
    const replaced = replaceGraphlessLinks(protectedHtml);
    return restoreHtmlBlocks(replaced, protectedBlocks);
  });

  eleventyConfig.addTransform("smiles-code-blocks", async function (str, outputPath) {
    if (!str || !outputPath || !outputPath.endsWith(".html")) {
      return str;
    }

    const parsed = parse(str);
    const blocks = parsed.querySelectorAll(".smiles-render-block");

    for (const block of blocks) {
      const encoded = block.getAttribute("data-smiles");
      const smilesText = encoded ? decodeURIComponent(encoded) : "";
      block.outerHTML = await renderSmilesBlockHtml(smilesText);
    }

    return parsed.toString();
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
