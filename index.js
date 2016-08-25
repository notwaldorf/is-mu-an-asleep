var menubar = require('menubar')
var ipc = require('electron').ipcMain
var mb = menubar({ dir: __dirname + '/app', width: 400, height: 200, preloadWindow: true, 'window-position': 'topRight' })

mb.on('show', function () {
  mb.window.webContents.send('show')
})

mb.app.on('activate', function () {
  mb.showWindow()
})

// When you receive the abort message, close the app
ipc.on('abort', function () {
  mb.hideWindow()
})
