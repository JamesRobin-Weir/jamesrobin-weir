const fs = require("fs");
const matter = require("gray-matter");
const slugify = require("@sindresorhus/slugify");

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function getAnchorAttributes(filePath, linkTitle) {
  let fileName = String(filePath || "").replaceAll("&amp;", "&").trim();
  let header = "";
  let headerLinkPath = "";

  if (fileName.includes("#")) {
    [fileName, header] = fileName.split("#");
    headerLinkPath = `#${slugify(header)}`;
  }

  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  const title = linkTitle && String(linkTitle).trim() ? String(linkTitle).trim() : fileName;
  let permalink = `/notes/${slugify(fileName)}`;
  let deadLink = false;

  try {
    const startPath = "./src/site/notes/";
    const normalizedFileName = fileName.replace(/\.(md|markdown)\s?$/i, "");
    const fullPath = `${startPath}${normalizedFileName}.md`;
    const file = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(file);

    if (frontMatter.data.permalink) {
      permalink = frontMatter.data.permalink;
    }
    if (
      frontMatter.data.tags &&
      frontMatter.data.tags.indexOf("gardenEntry") !== -1
    ) {
      permalink = "/";
    }
    if (frontMatter.data.noteIcon) {
      noteIcon = frontMatter.data.noteIcon;
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

function userEleventySetup(eleventyConfig) {
  eleventyConfig.addTransform("graphless-curly-links", function (str, outputPath) {
    if (!str || !outputPath || !outputPath.endsWith(".html")) {
      return str;
    }

    const { protectedHtml, protectedBlocks } = protectHtmlBlocks(str);
    const replaced = replaceGraphlessLinks(protectedHtml);
    return restoreHtmlBlocks(replaced, protectedBlocks);
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
