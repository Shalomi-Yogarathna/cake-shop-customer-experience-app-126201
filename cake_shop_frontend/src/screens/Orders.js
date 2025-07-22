import React, { useEffect, useState } from "react";
import { getOrders } from "../utils/api";
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders().then(o => {
      setOrders(o);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <div style={{padding:18, maxWidth:650, margin:"0 auto"}}>
      <h2 style={{ color: "var(--accent)", fontWeight: 700 }}>My Orders</h2>
      {loading && <div style={{ color:"var(--text-secondary)" }}>Loading orders...</div>}
      {!loading && !orders.length &&
        <div style={{margin:"48px 0", color:"var(--border-color)"}}>No orders placed yet.</div>
      }
      {orders.map(order => (
        <Link key={order.id} to={`/orders/${order.id}`} style={{
          display: "block",
          background: "var(--card-bg)",
          borderRadius: 13,
          boxShadow: "0 2px 8px rgba(0,0,0,0.11)",
          padding: "19px 18px",
          margin: "17px 0",
          color: "inherit",
          textDecoration: "none"
        }}>
          <div style={{ fontWeight: 700, color: "var(--primary)" }}>{order.cakeName}</div>
          <div style={{ color:"var(--secondary)", fontWeight: 600 }}>Order #{order.id}</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>
            Delivery: {order.deliveryTime} <br/>
            Address: {order.address}
          </div>
          <div style={{
            fontWeight: 700,
            color: order.status === "Delivered" ? "var(--accent)" : "var(--secondary)"
          }}>{order.status}</div>
        </Link>
      ))}
    </div>
  );
}
