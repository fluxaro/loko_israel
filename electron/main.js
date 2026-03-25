const { app, BrowserWindow, ipcMain, Menu, shell } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const NEXT_URL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../out/index.html')}`;

// Track open project windows
const projectWindows = new Map();

function createMainWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#ffffff',
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false, // allow loading external URLs in iframes
    },
    show: false,
    icon: path.join(__dirname, '../public/favicon.ico'),
  });

  win.loadURL(NEXT_URL);

  // Fade in once ready
  win.once('ready-to-show', () => {
    win.show();
    win.webContents.executeJavaScript(`
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.4s ease';
      setTimeout(() => { document.body.style.opacity = '1'; }, 50);
    `).catch(() => {});
  });

  if (isDev) win.webContents.openDevTools({ mode: 'detach' });

  buildMenu(win);
  return win;
}

function createProjectWindow(url, title) {
  // Reuse existing window for same URL
  if (projectWindows.has(url)) {
    const existing = projectWindows.get(url);
    if (!existing.isDestroyed()) {
      existing.focus();
      return existing;
    }
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 600,
    minHeight: 400,
    backgroundColor: '#ffffff',
    title: title || 'Live Preview',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
    },
    show: false,
  });

  // Yellow flash on open for brand feel
  win.once('ready-to-show', () => {
    win.show();
    win.webContents.executeJavaScript(`
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:#FFD700;opacity:0.18;z-index:99999;pointer-events:none;transition:opacity 0.5s ease;';
      document.body.appendChild(overlay);
      setTimeout(() => { overlay.style.opacity = '0'; }, 100);
      setTimeout(() => overlay.remove(), 700);
    `).catch(() => {});
  });

  win.loadURL(url).catch(() => {
    win.loadURL(`data:text/html,
      <html>
        <body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f9fafb;flex-direction:column;gap:16px;">
          <div style="font-size:48px;">⚠️</div>
          <h2 style="color:#111;margin:0;">Could not load preview</h2>
          <p style="color:#6b7280;margin:0;">This site may block embedding or require authentication.</p>
          <a href="${url}" style="color:#8a6d00;font-weight:bold;background:#FFD700;padding:10px 24px;border-radius:12px;text-decoration:none;margin-top:8px;">Open in Browser</a>
        </body>
      </html>
    `);
  });

  // Add toolbar with URL bar and open-in-browser button
  win.webContents.on('did-fail-load', (e, code, desc) => {
    if (code === -3) return; // aborted, ignore
    win.loadURL(`data:text/html,
      <html>
        <body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f9fafb;flex-direction:column;gap:16px;">
          <div style="font-size:48px;">⚠️</div>
          <h2 style="color:#111;margin:0;">Preview unavailable</h2>
          <p style="color:#6b7280;margin:0;text-align:center;max-width:360px;">Error ${code}: ${desc}<br/>This site may block embedding.</p>
          <a href="${url}" onclick="require('electron').shell.openExternal('${url}');return false;"
             style="color:#8a6d00;font-weight:bold;background:#FFD700;padding:10px 24px;border-radius:12px;text-decoration:none;margin-top:8px;">
            Open in Browser
          </a>
        </body>
      </html>
    `);
  });

  projectWindows.set(url, win);
  win.on('closed', () => projectWindows.delete(url));

  buildProjectMenu(win, url);
  return win;
}

// ── IPC handlers ──────────────────────────────────────────────
ipcMain.handle('open-project', (event, { url, title }) => {
  createProjectWindow(url, title);
  return { success: true };
});

ipcMain.handle('open-in-browser', (event, { url }) => {
  shell.openExternal(url);
  return { success: true };
});

ipcMain.handle('close-project', (event, { url }) => {
  const win = projectWindows.get(url);
  if (win && !win.isDestroyed()) win.close();
  return { success: true };
});

// ── Menu builders ─────────────────────────────────────────────
function buildMenu(mainWin) {
  const template = [
    {
      label: 'Portfolio',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: () => mainWin.reload() },
        { label: 'Toggle DevTools', accelerator: 'CmdOrCtrl+Shift+I', click: () => mainWin.webContents.toggleDevTools() },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'Zoom In', accelerator: 'CmdOrCtrl+=', click: () => { const z = mainWin.webContents.getZoomFactor(); mainWin.webContents.setZoomFactor(z + 0.1); } },
        { label: 'Zoom Out', accelerator: 'CmdOrCtrl+-', click: () => { const z = mainWin.webContents.getZoomFactor(); mainWin.webContents.setZoomFactor(Math.max(0.3, z - 0.1)); } },
        { label: 'Reset Zoom', accelerator: 'CmdOrCtrl+0', click: () => mainWin.webContents.setZoomFactor(1) },
        { type: 'separator' },
        { label: 'Toggle Fullscreen', accelerator: 'F11', click: () => mainWin.setFullScreen(!mainWin.isFullScreen()) },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

function buildProjectMenu(win, url) {
  const menu = Menu.buildFromTemplate([
    {
      label: 'Preview',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: () => win.reload() },
        { label: 'Open in Browser', accelerator: 'CmdOrCtrl+Shift+O', click: () => shell.openExternal(url) },
        { type: 'separator' },
        { label: 'Close', accelerator: 'CmdOrCtrl+W', click: () => win.close() },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'Zoom In', accelerator: 'CmdOrCtrl+=', click: () => { const z = win.webContents.getZoomFactor(); win.webContents.setZoomFactor(z + 0.1); } },
        { label: 'Zoom Out', accelerator: 'CmdOrCtrl+-', click: () => { const z = win.webContents.getZoomFactor(); win.webContents.setZoomFactor(Math.max(0.3, z - 0.1)); } },
        { label: 'Reset Zoom', accelerator: 'CmdOrCtrl+0', click: () => win.webContents.setZoomFactor(1) },
        { type: 'separator' },
        { label: 'Toggle Fullscreen', accelerator: 'F11', click: () => win.setFullScreen(!win.isFullScreen()) },
        { label: 'DevTools', accelerator: 'CmdOrCtrl+Shift+I', click: () => win.webContents.toggleDevTools() },
      ],
    },
  ]);
  win.setMenu(menu);
}

// ── App lifecycle ─────────────────────────────────────────────
app.whenReady().then(() => {
  createMainWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
