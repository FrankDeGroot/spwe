'use strict';

const fs = require('fs-extra');

const SimpleMDE = require('simplemde');
const simplemde = new SimpleMDE({
  spellChecker: false,
  status: false
});

module.exports = {
  open: async markdownFile => {
    const value = await fs.readFile(markdownFile, 'utf8');
    simplemde.value(value);
  }
};
