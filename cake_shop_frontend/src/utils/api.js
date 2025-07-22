import axios from "axios";

// Replace with your backend root
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8000";

// Auth
export const login = (email, password) =>
  axios.post(`${API_BASE}/auth/login`, { email, password }).then(r => r.data);

export const register = (data) =>
  axios.post(`${API_BASE}/auth/register`, data).then(r => r.data);

export const getMe = () =>
  axios.get(`${API_BASE}/auth/me`, { withCredentials: true }).then(r => r.data);

export const logoutUser = () =>
  axios.post(`${API_BASE}/auth/logout`, null, { withCredentials: true });

// Cake catalog
export const getCakes = () =>
  axios.get(`${API_BASE}/cakes`).then(r => r.data);

export const getCakeDetails = (id) =>
  axios.get(`${API_BASE}/cakes/${id}`).then(r => r.data);

// Orders
export const createOrder = (order) =>
  axios.post(`${API_BASE}/orders`, order, { withCredentials: true }).then(r => r.data);

export const getOrders = () =>
  axios.get(`${API_BASE}/orders`, { withCredentials: true }).then(r => r.data);

export const getOrder = (id) =>
  axios.get(`${API_BASE}/orders/${id}`, { withCredentials: true }).then(r => r.data);

// Payment
export const beginPayment = (orderId, paymentInfo) =>
  axios.post(`${API_BASE}/orders/${orderId}/pay`, paymentInfo, { withCredentials: true }).then(r => r.data);
