'use strict';


module.exports = new Promise((resolve, reject) => {
  const options = {
    root: global.config.siteDir
  };
  const httpServer = require('http-server');
  const server = httpServer.createServer(options);
  server.listen(8080, '127.0.0.1', err => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});
