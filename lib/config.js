'use strict';

const { app } = require('electron');
const { exists, readFile, writeFile } = require('fs-extra');
const { join } = require('path');

module.exports = {
  read: async () => {
    const configPath = join(app.getPath('userData'), 'config.json');
    if (!(await exists(configPath))) {
      const home = app.getPath('home');
      const template = join(home, 'template');
      const config = {
        contentDir: join(home, 'content'),
        designDir: join(template, 'design'),
        scriptDir: join(template, 'script'),
        styleDir: join(template, 'style'),
        siteDir: join(home, 'site'),
        siteToken: '<GitHub Personal Access Token with public_repo access>',
        siteUrl: 'https://github.com/<User Name>/<User Name>.github.io/'
      };
      await writeFile(configPath, JSON.stringify(config));
      return config;
    }
    return JSON.parse(await readFile(configPath));
  }
};
