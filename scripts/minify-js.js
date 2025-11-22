#!/usr/bin/env node
/**
 * Minifies JavaScript files using esbuild (modern, fast, maintained)
 * Minifies app.js, portfolio.js, translator.js, blog-enhancements.js
 * Outputs to same location, preserving original for dev
 */

import { build } from 'esbuild';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const filesToMinify = [
  'assets/js/loading.js',
  'assets/js/app.js',
  'assets/js/portfolio.js',
  'assets/js/translator.js',
  'assets/js/blog-enhancements.js'
];

async function minifyFile(filePath) {
  const fullPath = join(rootDir, filePath);
  
  if (!existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${filePath} (not found)`);
    return;
  }

  try {
    await build({
      entryPoints: [fullPath],
      outfile: fullPath,
      minify: true,
      allowOverwrite: true,
      target: 'es2015',
      format: 'iife',
      bundle: false, // Don't bundle, just minify
      legalComments: 'none'
    });
    
    console.log(`✅ Minified ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to minify ${filePath}:`, error.message);
  }
}

async function minifyAll() {
  console.log('🔧 Minifying JavaScript files...\n');
  
  for (const file of filesToMinify) {
    await minifyFile(file);
  }
  
  console.log('\n✨ JavaScript minification complete');
}

minifyAll().catch(console.error);
