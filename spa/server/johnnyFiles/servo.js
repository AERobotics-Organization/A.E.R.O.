let five = require('johnny-five')
let board = five.Board()

board.on('ready', () => {
  let servo = five.Servo(10)
  servo.min()
})