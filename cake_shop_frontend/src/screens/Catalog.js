import React, { useEffect, useState } from "react";
import { getCakes } from "../utils/api";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCakes().then(cs => {
      setCakes(cs);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 18, maxWidth: 800, margin: "0 auto"}}>
      <h2 style={{ color: "var(--primary)", marginBottom: 10, fontWeight: 700 }}>Cake Catalog</h2>
      {loading && <div style={{ color: "var(--text-secondary)" }}>Loading cakes...</div>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 22, justifyContent: "center" }}>
        {cakes.map(cake => (
          <Link key={cake.id} to={`/catalog/${cake.id}`} style={{
            background: "var(--card-bg)",
            borderRadius: 15,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            width: 170,
            padding: 10,
            textAlign: "center",
            color: "inherit",
            textDecoration: "none"
          }}>
            <img src={cake.imageUrl} alt={cake.name} style={{ borderRadius: 8, width: 135, height: 85, objectFit: "cover" }} />
            <div style={{ fontWeight: 600, margin: "8px 0", color: "var(--primary)" }}>{cake.name}</div>
            <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>{cake.shortDesc}</div>
            <div style={{ fontWeight: 700, color: "var(--accent)", marginTop: 4 }}>${cake.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
