const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { runCCode } = require('./src/runner/runCode');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,         
      contextIsolation: true,
      preload: path.join(__dirname, 'src/preload.js')   
    }
  });

  win.loadFile('src/app/index.html');
}

ipcMain.handle('run-c-code', async (_, code, expectedFiles = {}) => {
  return new Promise((resolve) => {
    runCCode(code, expectedFiles, (err, result) => {
      resolve(err || result);
    });
  });
});


app.whenReady().then(createWindow);
