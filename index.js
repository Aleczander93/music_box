var express = require("express");
var server = express();
var albumRouter = require('./server/routers/album.router.js');
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;
var mongoose = require("mongoose");

mongoose.connect(mongoURI);

var port= process.env.PORT || 8080;

server.use(express.static(__dirname + "/public" ));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root:__dirname});
});

server.use(albumRouter);

server.listen(port, function(){
  console.log('You are now listening on port...', port);
});
