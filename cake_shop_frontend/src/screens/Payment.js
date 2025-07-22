import React from "react";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const { state } = useLocation() || {};

  // Would really use Stripe Elements here with @stripe/react-stripe-js
  // For brevity, mock out payment UI
  return (
    <div style={{
      maxWidth: 400,
      margin: "58px auto",
      background: "var(--bg-secondary)",
      padding: 22,
      borderRadius: 14,
      boxShadow: "0 2px 10px rgba(0,0,0,0.10)"
    }}>
      <h2 style={{ color: "var(--primary)", fontWeight: 700 }}>Payment</h2>
      <div style={{margin:"12px 0"}}>Secure checkout with Stripe</div>
      {/* Substitute with real Stripe CardElement in production */}
      <div style={{
        background: "#2e2e30",
        border: "1.3px solid var(--border-color)",
        padding: "14px 12px",
        borderRadius: 7,
        color: "#FFD600",
        marginBottom: 20,
        fontWeight: 600
      }}>CARD DETAILS PLACEHOLDER</div>
      <button style={{
        background: "var(--button-bg)",
        color: "var(--button-text)",
        border: "none",
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 700,
        width: "100%",
        padding: "11px 0",
      }}>Pay with Stripe</button>
      <div style={{fontSize: 13, color: "var(--text-secondary)", marginTop: 10}}>
        Test Stripe integration in next sprint.
      </div>
    </div>
  );
}
