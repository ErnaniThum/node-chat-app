const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;

console.log(__dirname + '/../public');
console.log(publicPath);

var app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));

var io = socketIO(server);

io.on('connection',(socket) =>{
  console.log('User connected');

  socket.on('disconnect', function(){
    console.log("User was disconnect from server");
  });

});


server.listen(3000, () =>{
  console.log(`Server is up on port ${port}`);

});
