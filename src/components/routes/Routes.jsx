import React, { Suspense, useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Fallbackloader from "./Fallbackloader";

const Login = React.lazy(() => import("../Login"));
const Jobs = React.lazy(() => import("../seeker/pages/jobs/Jobs"));
const Profile = React.lazy(() => import("../seeker/pages/Profile"));
const Basic_Info = React.lazy(() => import("../seeker/pages/Basicinfo"));
import AuthContext from "../context/Auth";
const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Suspense fallback={<Fallbackloader />}>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            user?.isAuthenticated ? (
              user?.isProfileCompleted ? (
                <Navigate to="/jobs" />
              ) : (
                <Navigate to="/Basic_info" />
              )
            ) : (
              <Login />
            )
          }
        />

        {/* Profile Route */}
        <Route
          path="/profile"
          element={
            user?.isAuthenticated ? (
              user?.isProfileCompleted ? (
                <Profile />
              ) : (
                <Navigate to="/Basic_info" />
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Basic Info Route */}
        <Route
          path="/Basic_info"
          element={user?.isAuthenticated ? <Basic_Info /> : <Navigate to="/" />}
        />

        {/* Other Routes */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/update" element={<div>Update Page</div>} />
        <Route path="/create" element={<div>Create Page</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
