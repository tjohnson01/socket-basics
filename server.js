var PORT = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http); //start a new server and use express as boilerplate

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    console.log('User connected via socket.io!');

    socket.on('message', function(message){
        console.log('Message received: ' + message.text);

        // send to everybody except the person who sent it  //io.emit sends to everyone, including sender
        socket.broadcast.emit('message', message);  
    });

    socket.emit('message', {
        text: 'Welcome to the chat application!'
    });
});

http.listen(PORT, function(){
    console.log('Server started');
});