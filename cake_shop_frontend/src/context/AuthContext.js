import React, { createContext, useState, useEffect } from "react";
import { getMe, logoutUser as apiLogout } from "../utils/api";

// Authentication Context
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current user, if authenticated
  useEffect(() => {
    getMe().then(u => {
      setUser(u);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // PUBLIC_INTERFACE
  const loginUser = (userData) => setUser(userData);
  // PUBLIC_INTERFACE
  const logoutUser = async () => {
    await apiLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      loginUser,
      logoutUser,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
}
