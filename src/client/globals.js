window.IP = window.IP || ''
window.ENV = window.ENV || {}
location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, (s,k,v)=>{
    ENV[k]=v.toLowerCase()
})

window.LANG = ENV.lang === 'debug' ? 'debug' : (ENV.lang || navigator.language || '').substr(0, 2).toLowerCase()

window.PACKAGE = require('../../package.json')

window.LOADING = null

window.READ_ONLY = window.READ_ONLY || false
window.GRIDWIDTH_CSS = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-width'))
window.GRIDWIDTH = GRIDWIDTH_CSS



window.ELECTRON_NOGPU = false
window.CANVAS_FRAMERATE = parseFloat(ENV.framerate || 60)
window.CANVAS_SCALING = parseFloat(ENV.forcehdpi) || ( ENV.hdpi ? window.devicePixelRatio : 1 )
window.INITIALZOOM = ENV.zoom ? parseFloat(ENV.zoom) : 1
window.PXSCALE = INITIALZOOM
document.documentElement.style.setProperty('font-size', PXSCALE + 'px')

window.DOUBLE_TAP_TIME = ENV.doubletap ? parseInt(ENV.doubletap) : 375


window.JSON.parseFlex = require('json5').parse

window.DOM = require('./dom')

window.TITLE = PACKAGE.productName + ' v' + PACKAGE.version
