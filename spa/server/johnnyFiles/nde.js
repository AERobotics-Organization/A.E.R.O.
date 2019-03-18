let five = require('johnny-five')
let board = new five.Board()

board.on('ready', () => {
  let servo = new five.Servo(10)
  servo.max()
})