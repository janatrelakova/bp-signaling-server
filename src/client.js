//open a web socket from javascript
var ws = new WebSocket("ws://localhost:1234");

ws.onopen = function() {
                  
    // Web Socket is connected, send datas to server
    ws.send("Message from user");
    console.log("Message send to server");
 };

 ws.onmessage = function (evt) { 

     // handle messages from server
    var received_msg = evt.data;
    alert("Mesage from server = "+received_msg);
 };

 ws.onclose = function() { 
                  
    // websocket is closed
    console.log("Websocket Connection is closed...");
 };