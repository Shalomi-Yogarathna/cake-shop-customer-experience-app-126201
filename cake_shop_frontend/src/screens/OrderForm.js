import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createOrder } from "../utils/api";

export default function OrderForm() {
  const { state } = useLocation() || {};
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!state) return <div style={{padding: 32, color:"var(--text-secondary)"}}>No customization info received.<br/> Please go back to catalog and try again.</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); setError("");
    try {
      const order = await createOrder({
        ...state,
        address, deliveryTime, phone
      });
      navigate(`/payment`, { state: { orderId: order.id } });
    } catch (err) {
      setError("Failed to place order.");
    }
    setSubmitting(false);
  };

  return (
    <form style={{
      maxWidth: 400, margin: "36px auto",
      background: "var(--bg-secondary)",
      padding: 22, borderRadius: 16,
      boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
    }} onSubmit={handleSubmit}>
      <h2 style={{ color: "var(--primary)", fontWeight: 700 }}>Delivery Details</h2>
      <div>
        <div>Delivery Address</div>
        <input required value={address}
               onChange={e => setAddress(e.target.value)}
               placeholder="123 Main St"
               style={inputStyle} />
      </div>
      <div>
        <div>Delivery Date/Time</div>
        <input required type="datetime-local"
               value={deliveryTime}
               onChange={e => setDeliveryTime(e.target.value)}
               min={new Date().toISOString().slice(0,16)}
               style={inputStyle} />
      </div>
      <div>
        <div>Contact phone</div>
        <input type="tel" value={phone} required
               onChange={e => setPhone(e.target.value)}
               placeholder="555-123-4567" style={inputStyle} />
      </div>
      <button disabled={submitting}
        style={{
          background: "var(--button-bg)",
          color: "var(--button-text)",
          border: "none",
          borderRadius: 11,
          padding: "11px 29px",
          fontSize: 16,
          fontWeight: 700,
          marginTop: 24
        }}>
        {submitting ? "Placing..." : "Place Order & Pay"}
      </button>
      {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
    </form>
  );
}

const inputStyle = {
  width: "97%",
  fontSize: 16,
  border: "1.1px solid var(--border-color)",
  borderRadius: 8,
  padding: "8px",
  background: "var(--bg-primary)",
  color: "var(--text-primary)",
  marginBottom: 8
};
