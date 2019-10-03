const express = require('express');

const apiRoutes = require('./index')

const server = express();

server.use('/api', apiRoutes)

server.use(express.json())

//custom middleware


server.listen(6000, () => 'listening on 6000')

module.exports = server;
