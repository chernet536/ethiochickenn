import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  }

  return (
    <>
      <div style={{ marginTop: "-45px" }}>
        <div style={{ height: "50px" }}></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            padding: "20px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        >
          <form onSubmit={register}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Register
            </h1>
            <input
              type="text"
              placeholder="Username"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#8a181b",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}