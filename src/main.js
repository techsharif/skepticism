import BrowserWindow from 'sketch-module-web-view'
import { getWebview } from 'sketch-module-web-view/remote'
import UI from 'sketch/ui'
import handlerRoute from './handler-route'

const webviewIdentifier = 'skepticism.webview'

export default function () {
    const options = {
        identifier: webviewIdentifier,
        width: 240,
        height: 180,
        show: false
    }

    const browserWindow = new BrowserWindow(options)

    // only show the window when the page has loaded to avoid a white flash
    browserWindow.once('ready-to-show', () => {
        browserWindow.show()
    })

    const webContents = browserWindow.webContents

    // print a message when the page loads
    webContents.on('did-finish-load', () => {
        console.log("ok")
        UI.message('UI loaded!')
    })

    handlerRoute(webContents)

    browserWindow.loadURL(require('../resources/webview.html'))
}

// When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open
export function onShutdown() {
    const existingWebview = getWebview(webviewIdentifier)
    if (existingWebview) {
        existingWebview.close()
    }
}
