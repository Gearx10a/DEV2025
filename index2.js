const express = require('express')
const cors = require('cors')

const app = express ()

app.get('/', function(req, res, next) {
res. json({msg: 'Hello World'})
})

app.get('/', function(req, res, next) {
res. json({msg: 'Hello World'})
})

app.get('/', function(req, res, next) {
res. json({msg: 'Hello World'})
})

app.listen(process.env.PORT||3000)