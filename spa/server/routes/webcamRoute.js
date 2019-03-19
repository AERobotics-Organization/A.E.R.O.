const express = require('express')
const webcamRouter = express.Router()
const path = require('path')

webcamRouter
  .get('/', (req, res) => {
    res.sendFile('../client/src/components/Webcam/Webcam.jsx')
    //res.sendFile(path.join(__dirname, '../client/public/index.html'))
  })


module.exports = webcamRouter