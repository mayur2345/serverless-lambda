const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('ok')
  })
app.get('/version', function (req, res) {
  console.log(process.env.MAYUR_VERSION)
  res.send(`Serverless ci/cd v2! ${process.env.MAYUR_VERSION}`)
})

module.exports.handler = serverless(app);