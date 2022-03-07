const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
	  nodeIntegration: true,
    }
  });
  win.setMenu(null);
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on('activate', function() {
	var windows = BrowserWindow.getAllWindows();
	for (i=0; i<windows.length; i++) {
		windows[i].setMenu(null);
	}
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});