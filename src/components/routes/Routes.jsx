import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Fallbackloader from "./Fallbackloader";

const Login = React.lazy(() => import("../Login"));
const Profile = React.lazy(() => import("../seeker/pages/Profile"));

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Suspense fallback={<Fallbackloader />}>
      <Routes>
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
    </Suspense>
  );
};

export default AppRoutes;
