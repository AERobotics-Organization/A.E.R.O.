const express = require('express')
const terminateRouter = express.Router()
const { spawn } = require('child_process')

terminateRouter
  .post('/terminate', (req, res) => {
    let { thePID } = req.body
    // let terminateSpawn = spawn('kill', [thePID], {
    //   shell: true
    // })
    let terminateSpawn = spawn('kill', [thePID])

    terminateSpawn.stdout.on('data', (data) => {
      console.log("OUTPUT", data.toString())
    })
    terminateSpawn.stderr.on('data', (data) => {
      console.log("ERRORS", data.toString())
    })
    terminateSpawn.on('exit', (code) => {
      console.log(`Child exited with code ${code}`)
    })

    res.send(req.body)

  })
module.exports = terminateRouter