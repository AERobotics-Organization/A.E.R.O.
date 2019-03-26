const express = require('express')
const codeRouter = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')
const shortid = require('shortid')
let data = require('../data/fileData.json')
const { spawn } = require('child_process')
let PID
//let output = ''
let errors = []
let commandLine = []

codeRouter.use(bodyParser.json())
codeRouter.use(bodyParser.urlencoded({ extended: false }))

codeRouter.get('/codeAPI', (req, res) => {
  res.json(data)
})

codeRouter
  .post('/codeAPI', (req, res) => {

    console.log(req.body)
    let { currentFile, currentCode } = req.body
    let fileName = `johnnyFiles/${currentFile}`
    fs.writeFileSync(fileName, currentCode, (err) => {
      if (err) throw err
    })
    let nodeSpawn = spawn('node', [fileName], {
      //detached: true,
      shell: true
    })

    PID = nodeSpawn.pid

    nodeSpawn.stdout.on('data', (data) => {
      console.log("OUTPUT", data.toString())
      console.log("PID:: ", nodeSpawn.pid)
      commandLine.push(data.toString())
      commandLine.push('\n')
      console.log("COMMAND:: ", commandLine)
    })
    nodeSpawn.stderr.on('data', (data) => {
      console.log("ERRORS", data.toString())
      commandLine.push(data.toString())
    })
    nodeSpawn.on('exit', (code) => {
      console.log(`Child exited with code ${code}`)
    })

    ///////////////////////////////////
    let id = shortid.generate()
    let fileObject = {
      fileName: currentFile,
      fileContents: currentCode,
      ID: id,
      PID: PID
    }
    let newData = data.filter(file => {
      return file.fileName !== fileObject.fileName
    })
    newData = [fileObject, ...newData]
    fs.writeFileSync('data/fileData.json', JSON.stringify(newData), (err) => {
      if (err) throw err
    })

    // res.json({
    //   data,
    //   fileObject,
    //   commandLine
    // })

    setTimeout(() => {
      res.json({
        data,
        fileObject,
        commandLine
      })
    }, 1000)


  })





module.exports = codeRouter