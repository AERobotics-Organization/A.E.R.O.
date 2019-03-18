const express = require('express')
const codeRouter = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')
const shortid = require('shortid')
let data = require('../data/fileData.json')

codeRouter.use(bodyParser.json())
codeRouter.use(bodyParser.urlencoded({ extended: false }))

codeRouter.get('/codeAPI', (req, res) => {
  res.json(code)
})

codeRouter
  .post('/codeAPI', (req, res) => {
    // let date = new Date()
    // //date = date.toDateString('en-US')
    // console.log(date)
    // let fileName = `johnnyFiles/${date}Johnny5.js`
    //console.log(req.body.currentCode)

    // fs.writeFile(fileName, req.body.currentCode, (err) => {
    //   if (err) throw err
    // })

    // fs.appendFile(fileName, '\n\nmodule.exports = board', (err) => {
    //   if (err) throw err
    // })
    //const executable = require(`../johnnyFiles/${fileName}`)
    //console.log(executable, "EXECUTE")
    // code.push(req.body)
    // res.send(code)
    console.log(req.body)
    let fileName = `johnnyFiles/${req.body.currentFile}`
    fs.writeFileSync(fileName, req.body.currentCode, (err) => {
      if (err) throw err
    })
    let id = shortid.generate()
    let fileObject = {
      fileName: req.body.currentFile,
      fileContents: req.body.currentCode,
      ID: id
    }
    data = [fileObject, ...data]
    fs.writeFileSync('data/fileData.json', JSON.stringify(data), (err) => {
      if (err) throw err
    })
  })

module.exports = codeRouter