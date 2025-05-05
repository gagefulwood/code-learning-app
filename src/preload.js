const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  runCCode: (code, expectedFiles) => 
    ipcRenderer.invoke('run-c-code', code, expectedFiles)
});
