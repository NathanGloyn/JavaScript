var connect = require('connect');

var server= connect.createServer(connect.static('Vanilla'));

server.listen(8081);

