const express = require('express')
const app = express()
const PORT = process.argv[2] || process.env.PORT || 8088
const codeRouter = require('./routes/codeAPIRoute.js')
const terminateRouter = require('./routes/terminateRoute.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cv = require('opencv4nodejs')

app.set('socketio', io)

const FPS = 30
const wCap = new cv.VideoCapture(0)
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 275)
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 275)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', codeRouter)
app.use('/', terminateRouter)

setInterval(() => {
  const frame = wCap.read()
  const image = cv.imencode('.jpg', frame).toString('base64')
  io.emit('image', image)
}, 2000 / FPS)


server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})