import { WebSocketServer } from "ws";

// initializing the placeholder socket connections variable and 
// we will assign these socket connection to the placeholder variables on the go as we get the first two connections
let socket1: any = null;
let socket2: any = null;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    if(!socket1) {
        console.log("User 1 is entered the lobby");
        socket1 = socket;
    }
    else if(!socket2) {
        console.log("User 2 is entered the lobby");
        socket2 = socket;

        // now since the socket connections witht the server is a persistent connection hence we will 
        // define the on message handler here itself since both the sockets are defined

        socket1.on("message", (data: any) => {
            if(socket2) socket2.send(data.toString());
        })

        socket2.on("message", (data: any) => {
            if(socket1) socket1.send(data.toString());
        })
    }
    else {
        socket.send("Room is full");
        socket.close();
    }

    socket.on("close", () => {
        if(socket == socket1) socket1 = null; // freeing the variable
        if(socket == socket2) socket2 = null;
    })
})