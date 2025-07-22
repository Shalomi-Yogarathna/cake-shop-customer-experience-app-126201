import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Global Theme Context
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import BottomNav from './components/BottomNav';

// Screens
import Home from './screens/Home';
import Catalog from './screens/Catalog';
import CakeDetails from './screens/CakeDetails';
import Customize from './screens/Customize';
import OrderForm from './screens/OrderForm';
import Orders from './screens/Orders';
import OrderDetail from './screens/OrderDetail';
import Account from './screens/Account';
import Login from './screens/Login';
import Register from './screens/Register';
import Payment from './screens/Payment';
import NotFound from './screens/NotFound';
import NotificationHandler from './components/NotificationHandler';

// PUBLIC_INTERFACE
function App() {
  useEffect(() => {
    // Fix initial theme if needed or use system preference
    if (!localStorage.getItem('theme')) {
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      localStorage.setItem('theme', prefers);
    }
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <NotificationHandler />
          <main style={{
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            minHeight: '100vh',
            paddingBottom: '58px'
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:cakeId" element={<CakeDetails />} />
              <Route path="/catalog/:cakeId/customize" element={<Customize />} />
              <Route path="/order" element={<OrderForm />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:orderId" element={<OrderDetail />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <BottomNav />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
