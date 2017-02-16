var express = require('express')
var getRandomNumber = require('./src/utils')

var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/konkurs/api/number', function (req, res) {
  // faking long response
  setTimeout(() => {
    res.json({code: getRandomNumber(), name: 'John Doe'})
  }, 800)
})

app.listen(3001, function () {
  console.log('Fake api listening on port 3001!')
})
