const express = require('express')
const app = express()
const PORT = process.argv[2] || process.env.PORT || 8088
const codeRouter = require('./routes/codeAPIRoute.js')
const webcamRouter = require('./routes/webcamRoute.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cv = require('opencv4nodejs')

const FPS = 1
const wCap = new cv.VideoCapture(0)
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 300)
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 300)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', codeRouter)
app.use('/', webcamRouter)

setInterval(() => {
  const frame = wCap.read()
  const image = cv.imencode('.jpg', frame).toString('base64')
  io.emit('image', image)
}, 2000 / FPS)


server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})