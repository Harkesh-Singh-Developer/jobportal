import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ Move useNavigate here

  useEffect(() => {
    // Load user data from localStorage
    const storedAuth = localStorage.getItem("isAuthenticated") === "true";
    const profile = JSON.parse(localStorage.getItem("profile") || "{}");
    const uid = localStorage.getItem("uid");

    if (storedAuth && uid) {
      setUser({
        phoneNumber: localStorage.getItem("phoneNumber"),
        isAuthenticated: true,
        isProfileCompleted: profile?.completed || false,
        userId: localStorage.getItem("uid"),
        uid,
      });
    }
  }, []);

  const login = (phoneNumber, isProfileCompleted, uid) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("uid", uid);
    localStorage.setItem(
      "profile",
      JSON.stringify({ completed: isProfileCompleted })
    );

    setUser({
      phoneNumber,
      isAuthenticated: true,
      isProfileCompleted,
      uid,
    });
  };

  const updateUser = (newData) => {
    setUser((prev) => {
      const updatedUser = { ...prev, ...newData };
      if (newData?.isProfileCompleted !== undefined) {
        localStorage.setItem(
          "profile",
          JSON.stringify({ completed: newData.isProfileCompleted })
        );
      }
      return updatedUser;
    });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
