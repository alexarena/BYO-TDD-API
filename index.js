'use strict'

let express = require('express')
let bodyParser = require('body-parser')
let app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

//Use a different file for API routes
app.use('/',require('./routes'))

app.listen(port, ()=>{
  //console.log('API running on port: ' + port)
})

module.exports = app
