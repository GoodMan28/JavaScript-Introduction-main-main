import type { Request, Response } from "express"
import fs from "fs"
import { wss } from "../wss.js";
import { WebSocket } from "ws";
const ROOM_CODE_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

export function generateRoomCode(): string {
    let code = ""
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * ROOM_CODE_CHARSET.length)
        code += ROOM_CODE_CHARSET[randomIndex]
    }
    return code
}

export async function createRoom(req: Request, res: Response) {
    // Read the connection store fresh each time to avoid stale data
    const raw_data = await fs.promises.readFile("../connection_store.json", "utf-8");
    const rooms = JSON.parse(raw_data);
    let roomCode = generateRoomCode();
    while (rooms[roomCode]) {
        roomCode = generateRoomCode();
    }
    
    // now we will add the socket connection of the websocket server with the 
    wss.on("connection", async (socket: WebSocket) => {
        rooms[roomCode] = {
            socket_connections: [socket.url ?? socket.toString()], // store a serializable reference
            limit: parseInt(req.body.limit, 10)
        };
        
        // update the JSON file with the new room entry
        await fs.promises.writeFile("../connection_store.json", JSON.stringify(rooms, null, 2), "utf-8");
    })
}

export function message(req: Request, res: Response) {

}

export async function joinRoom(req: Request, res: Response) {
    const roomId = req.body.roomId;
    const raw_data = await fs.promises.readFile("../connection_store.json", "utf-8");
    const rooms = JSON.parse(raw_data);

    const roomSize = rooms[roomId].socket_connections.size();
    const roomLimit = rooms[roomId].limit;
    if(roomSize == roomLimit) {
        res.json({
            "success": false,
            "msg": "Room is full"
        })
        return;
    }

    // add a placeholder for the new connection (actual socket added on WS handshake)
    rooms[roomId].socket_connections.push(null);

    // write the updated rooms object back to the JSON file
    await fs.promises.writeFile("../connection_store.json", JSON.stringify(rooms, null, 2), "utf-8");

    res.json({
        "success": true,
        "msg": "Joined room successfully",
        "roomId": roomId
    });

}