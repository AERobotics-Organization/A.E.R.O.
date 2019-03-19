const five = require('johnny-five')
const board = five.Board()

board.on('ready', () => {
  let led = new five.Led(13)
  led.blink(500)
})