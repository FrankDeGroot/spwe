'use strict';

const { app, BrowserWindow } = require('electron');
const { read } = require('./lib/config');
const { join } = require('path');
const { format } = require('url');

let editorWindow;

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (editorWindow === null) {
    createWindow();
  }
});

function createWindow() {
  editorWindow = new BrowserWindow({ width: 800, height: 600 });
  editorWindow.webContents.on('did-finish-load', async () => {
    const config = await read();
    editorWindow.webContents.send('config', config);
  });
  editorWindow.on('closed', () => {
    editorWindow = null;
  });
  editorWindow.loadURL(
    format({
      pathname: join(__dirname, 'editor', 'editor.html'),
      protocol: 'file:',
      slashes: true
    })
  );
}
