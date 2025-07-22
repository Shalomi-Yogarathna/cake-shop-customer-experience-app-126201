import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      maxWidth: 620,
      margin: "0 auto",
      padding: "32px 8px",
      background: "var(--bg-primary)"
    }}>
      <h1 style={{ color: "var(--primary)", marginBottom: 8, fontWeight: 800 }}>Cake Delight 🍰</h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem" }}>Customize & order delicious cakes. Fast delivery to your door.</p>
      <Link to="/catalog">
        <button style={{
          background: "var(--accent)",
          padding: "16px 38px",
          border: "none",
          borderRadius: 13,
          color: "var(--bg-primary)",
          fontSize: "1.12rem",
          marginTop: 24,
          fontWeight: 600,
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
        }}>
          Browse Cakes
        </button>
      </Link>
      <div style={{ marginTop: 36 }}>
        <input
          type="search"
          placeholder="Search cakes..."
          style={{
            padding: "14px",
            width: "98%",
            background: "var(--bg-secondary)",
            border: "1.5px solid var(--accent)",
            color: "var(--text-primary)",
            fontSize: 18,
            borderRadius: 10,
            outline: "none"
          }}
        />
      </div>
      <div style={{ marginTop: 34 }}>
        {/* Featured cakes, can make this a component with images */}
        <h3 style={{ color: "var(--secondary)" }}>Featured Cakes</h3>
        <div style={{
          display: "flex",
          gap: 16,
          marginTop: 6,
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {/* Example featured cake cards */}
          <div style={{
            background: "var(--card-bg)",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            padding: 10,
            width: 120,
            textAlign: "center"
          }}>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80"
              alt="Chocolate" style={{ borderRadius: 8, maxWidth: "100%" }} />
            <div style={{ fontWeight: 600, color: "var(--accent)" }}>Chocolate</div>
          </div>
          <div style={{
            background: "var(--card-bg)",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            padding: 10,
            width: 120,
            textAlign: "center"
          }}>
            <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=300&q=80"
              alt="Vanilla Berry" style={{ borderRadius: 8, maxWidth: "100%" }} />
            <div style={{ fontWeight: 600, color: "var(--accent)" }}>Vanilla Berry</div>
          </div>
          {/* More sample cake cards... */}
        </div>
      </div>
    </div>
  );
}
