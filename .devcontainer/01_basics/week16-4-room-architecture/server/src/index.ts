import { WebSocketServer, WebSocket } from "ws";

const allSockets: Map<string, WebSocket[]> = new Map();

const wss = new WebSocketServer({port: 8080});

wss.on("connection", (socket) => {
    socket.on("message", (data) => {
        const parsed_data = JSON.parse(data as unknown as string);
        if(parsed_data.type === 'join') {
            // NOTE: when you add a socket to room make sure that either it is not a part of any other room previously
            // if it is then delete from there
            // or do anything based on your application need
            
            
            const roomId = parsed_data.payload.roomId;
            // even for create we will pass a join message with a unique roomId
            if(allSockets.has(roomId)) {
                allSockets.get(roomId)!.push(socket);
            }
            else {
                // new room it is
                allSockets.set(roomId, [socket]);
            }
        }

        else if(parsed_data.type === 'chat') {
            // now we will check in which room the socket is
            let foundRoomId: string[] | null = [];

            // NOTE: if the socket is a part of multiple rooms(in case) then broadcast it to all the rooms

            for (const [roomId, sockets] of allSockets) {
                if (sockets.includes(socket)) {
                    foundRoomId.push(roomId);
                }
            }
            const message = parsed_data.payload.message;
            if(foundRoomId.length) {
                // broadcast to all rooms the socket is part of
                foundRoomId.forEach((roomId) => {
                    allSockets.get(roomId)?.forEach((sock) => {
                        if(sock != socket) {
                            sock.send(`${message} (sent from server)`);
                        }
                    });
                });
            }
            else {
                socket.send("Exception: You are not in any room, Join a room first")
            }

        }
    })
}) 


// {
//    "type": "join",
//    "payload": {
//      "roomId": "123"
//    }
// }

// {
// 	"type": "chat",
// 	"payload": {
// 		"message: "hi there"
// 	}
// }
// https://petal-estimate-4e9.notion.site/Chat-app-1487dfd107358090af74d91494085834