import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div style={{padding:50, textAlign:"center", color:"var(--primary)"}}>
      <h1>404</h1>
      <div>Page not found.</div>
      <Link to="/"><button style={{
        background: "var(--button-bg)",
        color: "var(--button-text)",
        border: "none",
        borderRadius: 11,
        padding: "11px 29px",
        fontWeight: 700,
        fontSize: 16,
        marginTop: 24
      }}>Return Home</button></Link>
    </div>
  );
}
