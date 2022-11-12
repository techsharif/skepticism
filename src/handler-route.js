import UI from 'sketch/ui'

export default function (webContents){
    // add a handler for a call from web content's javascript
    webContents.on('nativeLog', s => {
        UI.message(s)
        webContents
            .executeJavaScript(`setRandomNumber(${Math.random()})`)
            .catch(console.error)
    })
}
