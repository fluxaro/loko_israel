/**
 * useElectron — detects if running inside Electron and exposes project window controls.
 * Falls back gracefully in browser (opens new tab instead).
 */
export function useElectron() {
  const isElectron = typeof window !== 'undefined' && !!window.electron;

  const openProject = async (url, title) => {
    if (isElectron) {
      await window.electron.openProject(url, title);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const openInBrowser = async (url) => {
    if (isElectron) {
      await window.electron.openInBrowser(url);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return { isElectron, openProject, openInBrowser };
}
