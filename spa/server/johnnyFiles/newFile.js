let five = require('johnny-five')
let board = new five.Board()

board.on('ready', () => {
  let serv1 = new five.Servo({
    pin: 10,
    startAt: 90
  })
 
  let serv2 = new five.Servo({
    pin: 9,
    startAt: 90
  })
  
  serv1.sweep("sweep: full", () => {
    this.sweep({
      range:[90, 120],
      step: 100
    })
  })

  serv2.sweep("sweep: full", () => {
    this.sweep({
      range: [90, 120],
      step: 100
    })
  })
})