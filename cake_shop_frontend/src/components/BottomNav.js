import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  height: "58px",
  backgroundColor: "var(--nav-bg)",
  borderTop: "1px solid var(--border-color)",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: 50,
};

const itemStyle = (isActive) => ({
  color: isActive ? "var(--nav-active)" : "var(--text-primary)",
  textDecoration: "none",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "1.1rem",
  padding: "4px 0",
  fontWeight: isActive ? 700 : 400
});

const navItems = [
  { to: "/", label: "Home", icon: <span role="img" aria-label="home">🏠</span> },
  { to: "/catalog", label: "Catalog", icon: <span role="img" aria-label="cakes">🎂</span> },
  { to: "/orders", label: "Orders", icon: <span role="img" aria-label="orders">🧾</span> },
  { to: "/account", label: "Account", icon: <span role="img" aria-label="user">👤</span> },
];

export default function BottomNav() {
  return (
    <nav style={navStyle}>
      {navItems.map(({to, label, icon}) => (
        <NavLink
          to={to}
          key={to}
          style={({ isActive }) => itemStyle(isActive)}
          end
        >
          {icon}
          <span style={{ fontSize: 12, marginTop: 2 }}>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
