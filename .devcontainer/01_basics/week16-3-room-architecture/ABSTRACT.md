# Room Architecture — Abstract

## The Problem with Mixing Express (HTTP) + WebSockets

In the previous approach, we were running both an **Express HTTP server** and a **WebSocket server (wss)** together. This caused complexity because:

- HTTP and WebSocket are **two different protocols** with different lifecycles.
- Actions like "join a room" or "send a message" were split across two systems — an HTTP request to check/validate, and then a WebSocket connection to actually communicate.
- Coordinating state between the two (e.g., knowing which socket belongs to which room) required extra plumbing, like passing `roomId` via URL query params from the HTTP response into the WebSocket handshake.
- Storing live socket objects was impossible in a JSON file (sockets are in-memory, non-serializable objects), so we needed two separate stores — one for metadata (JSON file) and one for live connections (in-memory Map).

This separation of concerns between HTTP and WebSocket made the code **harder to reason about and maintain**.

---

## The Better Approach — WebSocket-only with Message Types

Instead of using HTTP requests for room operations, we send **structured messages** entirely over the WebSocket connection. Each message has a `type` field that tells the server what action to perform.

### How it works

Once the client opens a single WebSocket connection to the server, it can send different types of messages to perform different actions:

```json
// To join a room
{ "type": "join_room", "roomId": "A3#K" }

// To send a message inside a room
{ "type": "message", "roomId": "A3#K", "content": "Hello everyone!" }

// To create a new room
{ "type": "create_room", "limit": 4 }
```

The server listens for these messages and routes them to the appropriate handler based on the `type` field — similar to how Express routes HTTP requests by URL and method.

---

## Why This is Better

| Concern | HTTP + WebSocket (old) | WebSocket-only (new) |
|---|---|---|
| Protocol complexity | Two protocols to manage | One protocol only |
| State coordination | Hard — HTTP and WS are separate | Easy — everything is on one connection |
| Socket tracking | Needed a separate in-memory Map | Socket is already available in the WS handler |
| Real-time capability | HTTP is request-response only | WebSocket is always open, fully bidirectional |

---

## Key Takeaway

> A WebSocket connection is persistent and bidirectional — once open, both the client and server can send messages at any time. This makes it the **right tool** for real-time features like rooms, chat, and live updates. HTTP (Express) is better suited for one-time operations like authentication or serving static assets — not for managing live, stateful connections.