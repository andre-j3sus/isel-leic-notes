#!/usr/bin/env node

/**
 * Script to generate git last-modified dates for all markdown files.
 * Outputs to src/data/git-dates.json
 */

import { execSync } from 'child_process';
import { writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Directories to exclude
const excludeDirs = ['node_modules', 'dist', '.astro', '.git', 'src', 'public', 'scripts'];

/**
 * Recursively find all markdown files
 */
function findMarkdownFiles(dir, files = []) {
  const entries = readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const relativePath = relative(rootDir, fullPath);
    
    // Skip excluded directories
    if (excludeDirs.some(excluded => relativePath.startsWith(excluded))) {
      continue;
    }
    
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      findMarkdownFiles(fullPath, files);
    } else if (entry.endsWith('.md')) {
      files.push(relativePath);
    }
  }
  
  return files;
}

/**
 * Get the last git commit date for a file
 */
function getGitDate(filePath) {
  try {
    const result = execSync(`git log -1 --format="%ci" -- "${filePath}"`, {
      cwd: rootDir,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
    
    if (result) {
      // Parse git date format: "2023-06-25 18:23:00 +0100"
      return new Date(result).toISOString();
    }
  } catch (error) {
    // File has no git history
  }
  
  return null;
}

// Main execution
console.log('Generating git dates for markdown files...');

const mdFiles = findMarkdownFiles(rootDir);
console.log(`Found ${mdFiles.length} markdown files`);

const gitDates = {};

for (const file of mdFiles) {
  const date = getGitDate(file);
  // Use the file path without extension as the key (matches how slugs are generated)
  const key = file.replace(/\.md$/, '');
  gitDates[key] = date;
}

const outputPath = join(rootDir, 'src', 'data', 'git-dates.json');
writeFileSync(outputPath, JSON.stringify(gitDates, null, 2));

console.log(`Written git dates to ${outputPath}`);
console.log(`Total files: ${Object.keys(gitDates).length}`);
console.log(`Files with dates: ${Object.values(gitDates).filter(Boolean).length}`);
console.log(`Files without dates: ${Object.values(gitDates).filter(d => d === null).length}`);
