const express = require('express')
const app = express()
const PORT = process.argv[2] || process.env || 8080

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})