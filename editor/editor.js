'use strict';

const glob = require('globby');
const { join } = require('path');
const { h } = require('preact');
const { ipcRenderer } = require('electron');
const { render } = require('preact');
const Files = require('./files');

ipcRenderer.on('config', async (event, config) => {
  const files = await glob(join(config.contentDir, '*.md'));
  render(h(Files, { files: files }), document.getElementById('controls'));
});
