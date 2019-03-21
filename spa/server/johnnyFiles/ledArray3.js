let five = require('johnny-five')
let board = five.Board()

board.on('ready', () => {
  let array = new five.Leds([13, 8, 4, 2])
  array.pulse()

})