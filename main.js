const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { runCCode } = require('./src/runner/runCode');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,         
      contextIsolation: false        
    }
  });

  win.loadFile('src/app/index.html');
}

app.whenReady().then(createWindow);
