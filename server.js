var PORT = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    http = require('http').Server(app); //start a new server and use express as boilerplate

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function(){
    console.log('Server started');
});