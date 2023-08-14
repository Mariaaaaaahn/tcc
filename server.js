const http = require("http");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("WebSocket server");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (message) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

server.listen(3000, () => {
    console.log("WebSocket server is running on port 3000");
});
