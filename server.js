var connect = require('connect');



connect.createServer(
    connect.static(__dirname)
).listen(8282);
var socket = require('socket.io');



var io = socket.listen(9292);

io.sockets.on('connection', function (socket) {
	console.log("connnect");
	socket.on('disconnect', function (socket) {
		console.log("disconnect");
	});
	socket.emit("pong",{txt:"Connected to server"});
	socket.on('ping', function (data) {
		console.log(data.txt);
		console.log(__dirname);
		socket.emit("pong",{txt:"Pong (from server)"});
	});
});