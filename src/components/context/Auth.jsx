import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data from localStorage
    const storedAuth = localStorage.getItem("isAuthenticated") === "true";
    const profile = JSON.parse(localStorage.getItem("profile") || "{}");

    if (storedAuth) {
      setUser({
        phoneNumber: localStorage.getItem("phoneNumber"),
        isAuthenticated: true,
        isProfileCompleted: profile?.completed || false,
      });
    }
  }, []);

  const login = (phoneNumber, isProfileCompleted) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("profile", JSON.stringify({ completed: isProfileCompleted }));

    setUser({
      phoneNumber,
      isAuthenticated: true,
      isProfileCompleted,
    });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
