const WebSocket = require("ws");

// Create a WebSocket server on port 5000
const wss = new WebSocket.Server({ port: 5001 });

wss.on("connection", (ws) => {
    console.log("New WebSocket connection established.");

    // Send a welcome message to the client
    ws.send("Hello from server!");

    // Handle messages received from the client
    ws.on("message", (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: ${message}`); // Echo message back to client
    });

    // Handle WebSocket closing
    ws.on("close", () => {
        console.log("WebSocket connection closed.");
    });

    // Handle errors
    ws.on("error", (error) => {
        console.error("WebSocket error:", error);
    });
});

console.log("WebSocket server running on wss://construct-point.onrender.com/ws");
const socket = new WebSocket("wss://construct-point.onrender.com/ws");

socket.onopen = () => {
    console.log("Connected to WebSocket server");
    socket.send("Hello from client!");
};

socket.onmessage = (event) => {
    console.log("Message from server:", event.data);
};

socket.onerror = (error) => {
    console.error("WebSocket error:", error);
};

socket.onclose = () => {
    console.log("WebSocket connection closed");
};
