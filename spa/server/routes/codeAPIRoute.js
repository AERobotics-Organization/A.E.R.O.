const express = require('express')
const codeRouter = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')

codeRouter.use(bodyParser.json())
codeRouter.use(bodyParser.urlencoded({ extended: false }))

code = [

]
codeRouter.get('/codeAPI', (req, res) => {
  res.json(code)
})

codeRouter
  .post('/codeAPI', (req, res) => {
    let date = new Date()
    //date = date.toDateString('en-US')
    console.log(date)
    let fileName = `johnnyFiles/${date}Johnny5.js`
    console.log(req.body.currentCode)
    fs.writeFile(fileName, req.body.currentCode, (err) => {
      if (err) throw err
    })
    // fs.appendFile(fileName, '\n\nmodule.exports = board', (err) => {
    //   if (err) throw err
    // })
    //const executable = require(`../johnnyFiles/${fileName}`)
    //console.log(executable, "EXECUTE")
    code.push(req.body)
    res.send(code)
  })

module.exports = codeRouter