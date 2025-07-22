import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../utils/api";

export default function OrderDetail() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrder(orderId).then(setOrder).finally(() => setLoading(false));
  }, [orderId]);

  if (loading) return <div style={{color:"var(--text-secondary)",padding:40}}>Loading...</div>;
  if (!order) return <div style={{color:"var(--text-secondary)",padding:40}}>Order not found.</div>;

  return (
    <div style={{maxWidth:500,margin:"0 auto",padding:24}}>
      <h2 style={{color:"var(--primary)"}}>Order #{order.id} — {order.status}</h2>
      <div style={{margin:"10px 0"}}>
        <b>Cake:</b> {order.cakeName} <br/>
        <b>Flavor:</b> {order.flavor} | <b>Size:</b> {order.size} <br/>
        <b>Toppings:</b> {order.toppings && order.toppings.join(", ")}
      </div>
      <div>
        <b>Delivery to:</b> {order.address}
        <br/>
        <b>Scheduled:</b> {order.deliveryTime}
      </div>
      <div style={{margin:"10px 0"}}>
        <b>Message:</b> {order.message}
        <br/>
        <b>Total Paid:</b> ${order.total}
      </div>
    </div>
  );
}
