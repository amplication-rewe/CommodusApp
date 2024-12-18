#!/usr/bin/env node

const logger = require('./logger');

const replace = require('replace-in-file');
const args = require('yargs')
  .option('files', {
    default: ['dist/**/*.{html,js}'],
    type: 'array',
  })
  .usage('Usage: $0 --files [list of files]').argv;

const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Vienna' });
const version = `${process.env.npm_package_version} (${now})`;

const options = {
  files: args.files,
  from: [/%APP_VERSION%/g],
  to: [version],
  allowEmptyPaths: true,
};

replace(options)
  .then((results) => {
    const changedFiles = results.filter((result) => result.hasChanged).map((result) => result.file);
    logger.success('[replace] modified files: ' + (changedFiles.join(', ') || 'none'));
  })
  .catch((error) => {
    logger.error(`[replace] ${error}`);
  });
