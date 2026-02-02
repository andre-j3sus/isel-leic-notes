/**
 * Remark plugin to fix relative paths in markdown
 * 
 * Problem: Markdown files use relative paths like `./docs/image.svg` and `file.md`
 * which work on GitHub but break on the website because pages are served from
 * nested URLs like `/subject/page/` (with trailing slash)
 * 
 * Solution: 
 * - Transform `./docs/` to `../docs/` for images
 * - Transform `file.md` to `../file` for links (also removes .md extension)
 */

import { visit } from 'unist-util-visit';

export function remarkFixRelativePaths() {
  return (tree) => {
    console.log('[remark] Plugin running...');
    
    // Handle markdown image nodes: ![alt](src)
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('./docs/')) {
        const oldUrl = node.url;
        node.url = node.url.replace('./docs/', '../docs/');
        console.log(`[remark] Transformed image: ${oldUrl} -> ${node.url}`);
      }
    });

    // Handle markdown link nodes: [text](href)
    visit(tree, 'link', (node) => {
      if (node.url && isRelativeMarkdownLink(node.url)) {
        const oldUrl = node.url;
        node.url = transformRelativeLink(node.url);
        console.log(`[remark] Transformed link: ${oldUrl} -> ${node.url}`);
      }
    });

    // Handle HTML nodes (for <img> tags in markdown)
    visit(tree, 'html', (node) => {
      if (node.value && node.value.includes('src="./docs/')) {
        node.value = node.value.replace(/src="\.\/docs\//g, 'src="../docs/');
      }
    });
  };
}

/**
 * Check if a URL is a relative markdown link (not absolute, not anchor, not external)
 */
function isRelativeMarkdownLink(url) {
  // Must end with .md
  if (!url.endsWith('.md')) return false;
  
  // Skip absolute URLs
  if (url.startsWith('http://') || url.startsWith('https://')) return false;
  
  // Skip anchor links
  if (url.startsWith('#')) return false;
  
  // Skip already-relative paths that go up directories
  if (url.startsWith('../')) return false;
  
  // Skip absolute paths
  if (url.startsWith('/')) return false;
  
  return true;
}

/**
 * Transform a relative markdown link to work with nested page URLs
 * Examples:
 *   "file.md" -> "../file"
 *   "./file.md" -> "../file"
 *   "./subdir/file.md" -> "../subdir/file"
 */
function transformRelativeLink(url) {
  // Remove .md extension
  let transformed = url.replace(/\.md$/, '');
  
  // Remove leading ./ if present
  if (transformed.startsWith('./')) {
    transformed = transformed.slice(2);
  }
  
  // Prepend ../ to go up one directory level
  return '../' + transformed;
}

// Keep old export name for backwards compatibility
export { remarkFixRelativePaths as remarkFixImagePaths };
