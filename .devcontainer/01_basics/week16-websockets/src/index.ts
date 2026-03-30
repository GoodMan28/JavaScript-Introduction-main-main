// here we will create a ws server that upon the message "ping" returns "pong"

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })
console.log("websocekt server is started");

wss.on("connection", (socket) => {
    console.log("User connected");
    // if the user gets the message ping then will send the message pong
    socket.on("message", (e) => {
        if(e.toString() === "ping") {
            socket.send("pong")
        }
        else {
            socket.send("--NA--")
        }
    })
})