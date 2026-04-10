const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const slugify = require('@sindresorhus/slugify');
const { headerToId } = require('./utils');

const jsYamlForMatter = require(require.resolve('js-yaml', {
  paths: [require.resolve('gray-matter')],
}));

const matterOptions = {
  engines: {
    yaml: {
      parse: (str) => jsYamlForMatter.load(str.replace(/\\\|/g, '|')),
      stringify: (obj) => jsYamlForMatter.dump(obj),
    },
  },
};

const NOTES_ROOT = './src/site/notes';
let cachedIndex = null;

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function walkNotesDir(dirPath) {
  let results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkNotesDir(fullPath));
      continue;
    }
    if (/\.(md|markdown)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

function normalizeKey(value) {
  return String(value || '')
    .replace(/\\/g, '/')
    .replace(/^\.\//, '')
    .replace(/^\//, '')
    .replace(/\.(md|markdown)\s?$/i, '')
    .trim()
    .toLowerCase();
}

function buildNoteIndex() {
  const byRelativePath = new Map();
  const byBaseName = new Map();

  if (!fs.existsSync(NOTES_ROOT)) {
    return { byRelativePath, byBaseName };
  }

  const noteFiles = walkNotesDir(NOTES_ROOT);

  for (const fullPath of noteFiles) {
    const relativePath = path.relative(NOTES_ROOT, fullPath).replace(/\\/g, '/');
    const relativeNoExt = relativePath.replace(/\.(md|markdown)$/i, '');
    const baseName = path.basename(relativeNoExt);

    let data = {};
    try {
      const file = fs.readFileSync(fullPath, 'utf8');
      data = matter(file, matterOptions).data || {};
    } catch {
      data = {};
    }

    let permalink = `/notes/${slugify(baseName)}`;
    if (data.permalink) {
      permalink = data.permalink;
    }
    if (Array.isArray(data.tags) && data.tags.includes('gardenEntry')) {
      permalink = '/';
    }

    const note = {
      relativeNoExt,
      baseName,
      permalink,
      noteIcon: data.noteIcon || process.env.NOTE_ICON_DEFAULT,
    };

    byRelativePath.set(normalizeKey(relativeNoExt), note);

    const baseKey = normalizeKey(baseName);
    if (!byBaseName.has(baseKey)) {
      byBaseName.set(baseKey, []);
    }
    byBaseName.get(baseKey).push(note);
  }

  return { byRelativePath, byBaseName };
}

function getNoteIndex() {
  if (!cachedIndex) {
    cachedIndex = buildNoteIndex();
  }
  return cachedIndex;
}

function resolveGraphlessTarget(filePath) {
  const { byRelativePath, byBaseName } = getNoteIndex();
  const normalized = normalizeKey(filePath);

  const exactMatch = byRelativePath.get(normalized);
  if (exactMatch) {
    return exactMatch;
  }

  const baseName = path.posix.basename(normalized);
  const baseMatches = byBaseName.get(baseName) || [];
  if (baseMatches.length === 1) {
    return baseMatches[0];
  }

  return null;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getAnchorAttributes(filePath, linkTitle) {
  let fileName = String(filePath || '').replaceAll('&amp;', '&').trim();
  let header = '';
  let headerLinkPath = '';

  if (fileName.includes('#')) {
    [fileName, header] = fileName.split('#');
    headerLinkPath = `#${headerToId(header)}`;
  }

  const title = linkTitle && String(linkTitle).trim()
    ? String(linkTitle).trim()
    : fileName;

  const resolvedNote = resolveGraphlessTarget(fileName);

  if (!resolvedNote) {
    return {
      attributes: {
        class: 'internal-link is-unresolved',
        href: '/404',
        target: '',
      },
      innerHTML: escapeHtml(title),
    };
  }

  return {
    attributes: {
      class: 'internal-link',
      target: '',
      'data-note-icon': resolvedNote.noteIcon,
      href: `${resolvedNote.permalink}${headerLinkPath}`,
    },
    innerHTML: escapeHtml(title),
  };
}

function getAnchorLink(filePath, linkTitle) {
  const { attributes, innerHTML } = getAnchorAttributes(filePath, linkTitle);
  return `<a ${Object.entries(attributes)
    .map(([key, value]) => `${key}="${String(value)}"`)
    .join(' ')}>${innerHTML}</a>`;
}

function replaceGraphlessLinks(text) {
  return text.replace(/\{\{([^{}|]+?)(?:\|([^{}]+?))?\}\}/g, (match, fileLink, linkTitle) => {
    const cleanedFileLink = String(fileLink || '').trim();
    const cleanedLinkTitle = linkTitle == null ? undefined : String(linkTitle).trim();

    if (!cleanedFileLink) {
      return match;
    }

    if (/[<>{}=]/.test(cleanedFileLink)) {
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
  eleventyConfig.on('eleventy.before', () => {
    cachedIndex = buildNoteIndex();
  });

  eleventyConfig.addTransform('graphless-curly-links', function (str, outputPath) {
    if (!str || !outputPath || !outputPath.endsWith('.html')) {
      return str;
    }

    const { protectedHtml, protectedBlocks } = protectHtmlBlocks(str);
    const replaced = replaceGraphlessLinks(protectedHtml);
    return restoreHtmlBlocks(replaced, protectedBlocks);
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
