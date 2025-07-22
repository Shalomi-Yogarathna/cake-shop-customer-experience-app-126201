import React, { useEffect, useState } from "react";
import { getCakeDetails } from "../utils/api";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function CakeDetails() {
  const { cakeId } = useParams();
  const [cake, setCake] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCakeDetails(cakeId).then(setCake).finally(() => setLoading(false));
  }, [cakeId]);

  if (loading) return <div style={{ color: "var(--text-secondary)", padding: 40 }}>Loading cake details...</div>;
  if (!cake) return <div style={{ color: "var(--accent)", padding: 40 }}>Cake not found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 18 }}>
      <img src={cake.imageUrl}
           alt={cake.name}
           style={{ width: "100%", maxHeight: 290, objectFit: "cover", borderRadius: 16, marginBottom: 14 }} />
      <h2 style={{ color: "var(--primary)", fontWeight: 700 }}>{cake.name}</h2>
      <div style={{ fontWeight: 500, color: "var(--accent)" }}>from ${cake.price}</div>
      <div style={{ fontSize: 16, color: "var(--text-primary)", margin: "12px 0" }}>{cake.description}</div>
      <Link to={`/catalog/${cakeId}/customize`}>
        <button style={{
          background: "var(--secondary)",
          color: "#111",
          border: "none",
          borderRadius: 12,
          padding: "14px 30px",
          fontWeight: 700,
          fontSize: 17,
          marginTop: 28
        }}>
          Customize & Order
        </button>
      </Link>
      <button onClick={() => navigate(-1)} style={{
        marginTop: 18, padding: "7px 18px", background: "none",
        border: "1.4px solid var(--border-color)", borderRadius: 9, color: "var(--text-secondary)",
        fontWeight: 500, marginLeft: 10
      }}>Back</button>
    </div>
  );
}
