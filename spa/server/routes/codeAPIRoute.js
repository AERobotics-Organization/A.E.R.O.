const express = require('express')
const codeRouter = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')
const shortid = require('shortid')
let data = require('../data/fileData.json')
const { spawn } = require('child_process')

codeRouter.use(bodyParser.json())
codeRouter.use(bodyParser.urlencoded({ extended: false }))

codeRouter.get('/codeAPI', (req, res) => {
  res.json(data)
})

codeRouter
  .post('/codeAPI', (req, res) => {

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

    res.json(data)
    ///////////////////////////////////////////
    let nodeSpawn = spawn('node', [fileName], {
      //detached: true,
      shell: true
    })
    nodeSpawn.stdout.on('data', (data) => {
      console.log("OUTPUT", data.toString())
    })
    nodeSpawn.stderr.on('data', (data) => {
      console.log("ERRORS", data.toString())
    })
    nodeSpawn.on('exit', (code) => {
      console.log(`Child exited with code ${code}`)
      nodeSpawn.kill('SIGINT')
    })

  })



module.exports = codeRouter