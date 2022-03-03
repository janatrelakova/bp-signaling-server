var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({ port: 1234 });

wss.on('listening', function () {
	console.log("Server started with port 1234");
});

wss.on('connection', function (connection) {

    console.log("User is connected");
    connection.send("Hello from server");
    
    /* Action to do when user send messages */
    connection.on('message', function (message) {
        
        console.log("Message from user");
    });

    
    /* Action to do When user try to close the connection */
    connection.on('close', function () {
        console.log("Disconnecting user"); 
    });  
   
});