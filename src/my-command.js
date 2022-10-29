import BrowserWindow from 'sketch-module-web-view'

export default function () {
  const options = {
    identifier: 'unique.id',
  }

  const browserWindow = new BrowserWindow(options)

  browserWindow.loadURL(require('./my-screen.html'))
}
