var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` component instance
  var led1 = new five.Led(13);
  let led2 = new five.Led(12);

  // "blink" the led in 500ms
  // on-off phase periods
  led1.blink(500);
  led2.blink(200);
});