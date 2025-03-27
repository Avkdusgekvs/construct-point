const testSocket = new WebSocket("wss://construct-point.onrender.com/ws");

testSocket.onopen = () => console.log("Connected to WebSocket server!");
testSocket.onerror = (err) => console.log("WebSocket Error:", err);
testSocket.onmessage = (message) => console.log("Message from server:", message.data);
testSocket.onclose = () => console.log("WebSocket connection closed.");
