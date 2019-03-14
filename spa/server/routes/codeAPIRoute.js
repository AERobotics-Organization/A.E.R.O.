const express = require('express')
const codeRouter = express.Router()
const bodyParser = require('body-parser')

codeRouter.use(bodyParser.json())
codeRouter.use(bodyParser.urlencoded({ extended: false }))

code = [

]
codeRouter.get('/codeAPI', (req, res) => {
  res.json(code)
})

codeRouter
  .post('/codeAPI', (req, res) => {
    console.log(req.body)
    code.push(req.body)
    res.send(code)
  })
// .post('/codeAPI', (req, res) => {
//   // console.log(req.body)
//   const currentCode = req.body
//   code.push(currentCode)
//   res.json(code[code.length])
//   console.log("test")
// })


module.exports = codeRouter