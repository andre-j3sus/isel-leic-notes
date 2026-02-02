/**
 * Remark plugin to fix image paths in markdown
 * 
 * Problem: Markdown files use relative paths like `./docs/image.svg` which work
 * on GitHub but break on the website because pages are served from nested URLs
 * like `/semester/subject/page/` (with trailing slash).
 * 
 * Example:
 *   - Markdown file: 4th-semester/pc/1-threads.md
 *   - Image reference: ./docs/diagram.svg
 *   - Page URL: /4th-semester/pc/1-threads/
 *   - Without fix: ./docs/ resolves to /4th-semester/pc/1-threads/docs/ (404)
 *   - With fix: ../docs/ resolves to /4th-semester/pc/docs/ (correct)
 * 
 * The copy-docs-assets.js script copies docs folders to public/{semester}/{subject}/docs/
 * so the ../docs/ path correctly finds the assets.
 */

import { visit } from 'unist-util-visit';

export function remarkFixRelativePaths() {
  return (tree) => {
    // Handle markdown image nodes: ![alt](src)
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('./docs/')) {
        node.url = node.url.replace('./docs/', '../docs/');
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
