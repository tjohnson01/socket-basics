var socket = io();

//browser connect
socket.on('connect', function(){
    console.log('Connected to socket.io server');
});