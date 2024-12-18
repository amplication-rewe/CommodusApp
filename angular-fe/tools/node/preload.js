#!/usr/bin/env node

const fs = require('fs');
const logger = require('./logger');
const chalk = require('chalk');

const distDir = 'dist/apps/web-ui/';
const distIndex = 'dist/apps/web-ui/index.html';

const regexInjectionMarker = /(<!-- inject:preload-fonts -->)([\s\S]*?)(<!-- endinject -->)/gm;
const regexFile = /href="([^"]+)"/g;
const fontFiles = [];

// get index.html
const indexFileContent = fs.readFileSync(distIndex, 'utf8');

// get fonts from preload-fonts marker
const html = indexFileContent.match(regexInjectionMarker);

if (html) {
  let snippet = html[0];
  let match;

  // get the font file names
  while ((match = regexFile.exec(snippet)) !== null) {
    fontFiles.push(match[1]);
  }

  // get the font files from dist folder
  const distFiles = fs.readdirSync(distDir);

  fontFiles.forEach((fontFileName) => {
    // check if file is in distFiles
    const distFileName = distFiles.find((fileName) => fileName.startsWith(fontFileName.replace(/\.[^/.]+$/, '')));

    if (distFileName) {
      // replace in snippet
      snippet = snippet.replace(fontFileName, distFileName);
      logger.info(`[preload] font: ${distFileName}`);
    }
  });

  // replace in index.html
  fs.writeFileSync(distIndex, indexFileContent.replace(regexInjectionMarker, snippet));

  logger.success(`[preload] Inserted preload font links into ${chalk.yellow.underline(distIndex)}`);
} else {
  logger.warn(`[preload] Could not find the preload-fonts marker in ${chalk.yellow.underline(distIndex)}!`);
}
