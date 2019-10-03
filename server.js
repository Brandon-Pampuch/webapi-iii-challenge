const express = require('express');



const server = express();



server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {

};

server.listen(6000, () => 'listening on 6000')

module.exports = server;
