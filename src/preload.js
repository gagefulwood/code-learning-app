const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  runCCode: (code) => ipcRenderer.invoke('run-c-code', code)
});
