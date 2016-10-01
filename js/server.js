var express = require('express')
var server = express()
var path = require('path')
var project_folder = __dirname + '/../'

var bodyParser = require('body-parser')
server.use(bodyParser.json())

// server.use(express.static(project_folder + 'css'))
server.use(express.static(project_folder + 'htdocs'))
server.use(express.static(project_folder + 'dist'))
server.use(express.static(project_folder + 'img'))

// lol routes
server.get('/', function (req, res) {
  res.sendFile('page.html')
})

console.log('Port currently being used is: ' + (process.env.PORT || 8080))

server.listen(process.env.PORT || 8080)
