const express = require('express')
const app = express()
const PORT = process.argv[2] || process.env.PORT || 8088
const codeRouter = require('./routes/codeAPIRoute.js')
const cors = require('cors')
const bodyParser = require('body-parser')
// const socketIO = require('socket.io')
// const io = socketIO()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', codeRouter)




app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})