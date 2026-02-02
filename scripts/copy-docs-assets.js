#!/usr/bin/env node

/**
 * Copy docs folders from content directories to public/
 * This allows relative image paths like "./docs/image.svg" to work
 * when the markdown is rendered at /4th-semester/pc/1-threads
 */

import { existsSync, mkdirSync, cpSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

// Semester directories to scan
const semesterDirs = [
  '1st-semester',
  '2nd-semester',
  '3rd-semester',
  '4th-semester',
  '5th-semester',
  '6th-semester',
];

console.log('Copying docs assets to public folder...');

let copiedCount = 0;

for (const semester of semesterDirs) {
  const semesterPath = join(rootDir, semester);
  
  if (!existsSync(semesterPath)) continue;
  
  // Get all subject directories in this semester
  const subjects = readdirSync(semesterPath).filter(item => {
    const itemPath = join(semesterPath, item);
    return statSync(itemPath).isDirectory();
  });
  
  for (const subject of subjects) {
    const docsSource = join(semesterPath, subject, 'docs');
    
    if (!existsSync(docsSource)) continue;
    
    // Target: public/{semester}/{subject}/docs
    const docsTarget = join(publicDir, semester, subject, 'docs');
    
    // Create parent directories if needed
    mkdirSync(dirname(docsTarget), { recursive: true });
    
    // Copy the docs folder
    cpSync(docsSource, docsTarget, { recursive: true });
    
    const fileCount = readdirSync(docsSource).length;
    console.log(`  Copied ${semester}/${subject}/docs (${fileCount} files)`);
    copiedCount += fileCount;
  }
}

console.log(`Done! Copied ${copiedCount} asset files.`);
