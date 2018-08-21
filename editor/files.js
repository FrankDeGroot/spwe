'use strict';

const { basename } = require('path');
const { Component, h } = require('preact');

class Files extends Component {
  render(props) {
    const items = props.files.map(item =>
      h(
        'li',
        { id: item },
        h('a', { href: '#', onClick: () => props.open(item) }, basename(item))
      )
    );
    return h('main', null, h('ul', {}, items));
  }
}

module.exports = Files;
