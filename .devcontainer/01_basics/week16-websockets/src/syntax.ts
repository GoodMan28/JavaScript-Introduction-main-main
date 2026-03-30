import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port : 8080 });
console.log("The server is started and is waiting for connection");
// event handler
wss.on("connection", function(socket) {
    console.log("user connected");
    setInterval(() => {
        socket.send(`The current price for solana is ${Math.random()}`);
    }, 500)

    // for the connection of the socket not the whole server
    socket.on("message", (e) => {
        console.log(e.toString());
    })
})