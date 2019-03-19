let five = require('johnny-five')
let board = five.Board()

board.on('ready', () => {
  let servo = new five.Servo(10)
  servo.min()
  let led = new five.led(13)
  led.blink(200)
})