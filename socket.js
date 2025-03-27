

const socket = new WebSocket("wss://construct-point.onrender.com/ws");


socket.onopen = () => {
  console.log("✅ Connected to WebSocket server");
};

socket.onerror = (error) => {
  console.error("❌ WebSocket Error:", error);
};

socket.onmessage = (event) => {
  console.log("📩 Message from server:", event.data);
};

socket.onclose = () => {
  console.warn("⚠️ WebSocket connection closed.");
};

export default socket;






















