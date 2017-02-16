import express from 'express'

var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/konkurs/api/number', function (req, res) {
  let randInt = Math.random() * (100 - 1) + 1
  res.json({code: randInt, name: 'John Doe'})
})

app.listen(3001, function () {
  console.log('Fake api listening on port 3001!')
})
