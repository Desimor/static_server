var express = require('express');
var server = express();

var port = 8080;

server.listen(port, function (){
  console.log('Now Listening on port', port);
});
