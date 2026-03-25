const { contextBridge, ipcRenderer } = require('electron');

// Expose safe Electron APIs to the renderer (Next.js)
contextBridge.exposeInMainWorld('electron', {
  openProject: (url, title) => ipcRenderer.invoke('open-project', { url, title }),
  openInBrowser: (url) => ipcRenderer.invoke('open-in-browser', { url }),
  closeProject: (url) => ipcRenderer.invoke('close-project', { url }),
  isElectron: true,
});
