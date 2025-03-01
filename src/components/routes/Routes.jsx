// src/routes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login";
import Profile from "../seeker/pages/Profile";

const AppRoutes = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Routes>
      {/* If not logged in, show Login page */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/profile" />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />

      {/* Profile page (Only accessible when logged in) */}
      <Route
        path="/profile"
        element={
          isAuthenticated ? (
            <Profile setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
