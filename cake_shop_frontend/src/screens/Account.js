import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Account() {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) {
    return (
      <div style={{
        maxWidth: 400, margin: "80px auto",
        background: "var(--bg-secondary)", color: "var(--primary)",
        borderRadius: 14, padding: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
      }}>
        <h2>Account</h2>
        <Link to="/login"><button style={btnStyle}>Log In</button></Link>
        <Link to="/register"><button style={{...btnStyle, marginLeft: 12}}>Register</button></Link>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: 400, margin: "80px auto",
      background: "var(--bg-secondary)", color: "var(--primary)",
      borderRadius: 14, padding: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.11)"
    }}>
      <h2>Welcome, {user.name}</h2>
      <div style={{fontWeight:600}}>{user.email}</div>
      <button onClick={logoutUser} style={{ ...btnStyle, background: "var(--accent)", color: "#1A2421", marginTop: 24 }}>Logout</button>
    </div>
  );
}

const btnStyle = {
  background: "var(--button-bg)",
  color: "var(--button-text)",
  border: "none",
  borderRadius: 11,
  padding: "11px 29px",
  fontWeight: 700,
  fontSize: 16,
  marginTop: 14
};
