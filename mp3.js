var express = require('express');
var app = express();
var server = require('http').Server(app);
var fs = require('fs');
var io = require('socket.io')(server);
var ss = require('socket.io-stream');

app.use(express.static(__dirname+'/html'));

server.listen(8000);

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/html/index.html');
// });

io.on('connection', function (socket) {
    var stream = ss.createStream();
    var filename = __dirname + '/penningen.mp3' ;
    fs.createReadStream(filename).pipe(stream);
    ss(socket).emit('audio-stream', stream, { name: filename });

});
