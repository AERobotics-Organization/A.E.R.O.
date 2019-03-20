let five = require('johnny-five')
let board = five.Board()

board.on('ready', () => {
  let led = new five.Led(13)
  led.blink(100)
})