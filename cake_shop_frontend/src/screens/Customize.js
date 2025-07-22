import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FLAVORS = ["Chocolate", "Vanilla", "Red Velvet", "Lemon", "Coffee"];
const SIZES = ["Small (6\")", "Medium (8\")", "Large (10\")"];
const TOPPINGS = ["Strawberries", "Chocolate Chips", "Nuts", "Blueberries", "Sprinkles"];

export default function Customize() {
  const { cakeId } = useParams();
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [size, setSize] = useState(SIZES[0]);
  const [toppings, setToppings] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleToppings = t => {
    setToppings(toppings.includes(t)
      ? toppings.filter(x => x !== t)
      : [...toppings, t]);
  };

  // On submit, redirect to /order page with selections
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order`, {
      state: { cakeId, flavor, size, toppings, message }
    });
  };

  return (
    <form style={{
      maxWidth: 410,
      margin: "36px auto",
      background: "var(--bg-secondary)",
      padding: 22,
      borderRadius: 17,
      boxShadow: "0 2px 12px rgba(0,0,0,0.11)"
    }} onSubmit={handleSubmit}>
      <h2 style={{color: "var(--primary)", fontWeight: 700}}>Customize Your Cake</h2>
      
      <div style={{margin: "18px 0 0"}}>
        <div style={{fontWeight: 600}}>Select Flavor</div>
        {FLAVORS.map(f => (
          <label key={f} style={{marginRight: 18}}>
            <input
              type="radio" name="flavor" value={f}
              checked={flavor === f}
              onChange={() => setFlavor(f)} />
            <span style={{marginLeft: 7}}>{f}</span>
          </label>
        ))}
      </div>
      <div style={{margin: "18px 0 0"}}>
        <div style={{fontWeight: 600}}>Select Size</div>
        <select value={size} onChange={e => setSize(e.target.value)} style={{
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
          border: "1.6px solid var(--accent)",
          borderRadius: 8,
          fontSize: 16,
          padding: "7px 14px"
        }}>
          {SIZES.map(sz => (
            <option key={sz}>{sz}</option>
          ))}
        </select>
      </div>
      <div style={{margin: "18px 0 0"}}>
        <div style={{fontWeight: 600}}>Toppings</div>
        {TOPPINGS.map(t => (
          <label key={t} style={{display:"inline-block", marginRight: 17}}>
            <input
              type="checkbox"
              checked={toppings.includes(t)}
              onChange={() => handleToppings(t)} />
            <span style={{marginLeft: 7}}>{t}</span>
          </label>
        ))}
      </div>
      <div style={{marginTop: 20}}>
        <label>
          <div style={{fontWeight: 600}}>Custom Message on Cake</div>
          <input
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={{
              width: "98%",
              fontSize: 16,
              border: "1.1px solid var(--border-color)",
              borderRadius: 7,
              padding: "6px 8px",
              background: "var(--bg-primary)",
              color: "var(--text-primary)"
            }}
            maxLength={50}
            placeholder="E.g. Happy Birthday Tom!" />
        </label>
      </div>
      <button
        type="submit"
        style={{
          background: "var(--button-bg)",
          color: "var(--button-text)",
          border: "none",
          borderRadius: 11,
          padding: "11px 29px",
          fontSize: 16,
          fontWeight: 700,
          marginTop: 28
        }}>
        Next: Delivery & Checkout
      </button>
    </form>
  );
}
