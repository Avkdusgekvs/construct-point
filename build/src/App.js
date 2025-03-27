import "./styles.css";  // ✅ Import global styles
import React from "react";


function App() {
  return (
    <div>
      <h1>Hello, Construct Point!</h1>
      <p>This is a test message.</p>
    </div>
  );
}


function App() {
  return (
    <div className="container">
      <h1>Welcome to Construct Point</h1>
      <p>This is a test message.</p>
    </div>
  );
}
function App() {
    return (
      <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
        <h1 style={{ color: "blue" }}>Hello, Construct Point!</h1>
      </div>
    );
  }
  

import React, { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  let socket;

  useEffect(() => {
    socket = new WebSocket("wss://construct-point.onrender.com/ws"); // 🔹 Change to match your WebSocket server

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      socket.send("Hello from React Client!");
    };

    socket.onmessage = (event) => {
      console.log("Message from server:", event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close(); // Cleanup on unmount
    };
  }, []);

  const sendMessage = () => {
    if (socket && input) {
      socket.send(input);
      setMessages((prevMessages) => [...prevMessages, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>WebSocket Chat</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "100px" }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ marginTop: "10px", padding: "5px" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "5px" }}>Send</button>
    </div>
  );
}

import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const socket = new WebSocket("wss://construct-point.onrender.com/ws");

    socket.onopen = () => console.log("Connected to WebSocket!");
    socket.onerror = (err) => console.error("WebSocket Error:", err);
    socket.onmessage = (message) => console.log("Message from server:", message.data);
    socket.onclose = () => console.log("WebSocket closed.");

    return () => socket.close(); // Cleanup on unmount
  }, []);

  return <h1>Hello, Construct Point!</h1>;
}

export default App;
