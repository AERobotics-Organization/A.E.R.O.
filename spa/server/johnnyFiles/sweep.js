let five = require('johnny-five')
let board = new five.Board()

board.on('ready', () => {
  let serv = new five.Servo({
    pin: 10,
    startAt: 90
  })
  
  serv.sweep("sweep: full", () => {
    this.sweep({
      range:[90, 120],
      step: 10
    })
  })
})