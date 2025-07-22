import React, { useState, useContext } from "react";
import { login } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      const userData = await login(email, password);
      loginUser(userData);
      navigate("/account");
    } catch (err) {
      setError("Invalid login credentials.");
    }
  };

  return (
    <form style={{
      maxWidth: 340,
      margin: "80px auto",
      background: "var(--bg-secondary)",
      padding: "28px 18px",
      borderRadius: 13,
      boxShadow: "0 2px 10px rgba(0,0,0,0.09)"
    }} onSubmit={handleSubmit}>
      <h2 style={{ color: "var(--primary)", fontWeight: 700 }}>Log In</h2>
      <input type="email" value={email} required
        onChange={e => setEmail(e.target.value)}
        placeholder="Email" style={inputStyle} autoFocus />
      <input type="password" value={password} required
        onChange={e => setPassword(e.target.value)}
        placeholder="Password" style={inputStyle} />
      <button type="submit" style={{
        ...btnStyle,
        background: "var(--button-bg)",
        color: "var(--button-text)",
        width:"100%",
        marginTop: 18
      }}>Log In</button>
      {error && <div style={{ color:"red", marginTop: 11 }}>{error}</div>}
      <div style={{marginTop:20}}>
        New here? <Link to="/register" style={{color:"var(--accent)",fontWeight:700}}>Register</Link>
      </div>
    </form>
  );
}

const inputStyle = {
  width: "98%", fontSize: 16, border: "1.1px solid var(--border-color)",
  borderRadius: 8, padding: "8px 8px", background: "var(--bg-primary)",
  color: "var(--text-primary)", marginBottom: 14
};
const btnStyle = {
  border: "none", borderRadius: 10, fontSize: 16, fontWeight: 600, padding: "9px 0"
};
