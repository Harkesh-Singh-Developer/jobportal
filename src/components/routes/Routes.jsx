import React, { Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Fallbackloader from "./Fallbackloader";
import AuthContext from "../context/Auth";
import MainLayout from "../layout/Mainlayout";

const Login = React.lazy(() => import("../Login"));
const Website = React.lazy(() => import("../website/Website")); // New Website Component
const Jobs = React.lazy(() => import("../seeker/pages/jobs/Jobs"));
const Profile = React.lazy(() => import("../seeker/pages/Profile"));
const Basic_Info = React.lazy(() => import("../seeker/pages/Basicinfo"));

const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user?.isAuthenticated;
  const isProfileCompleted = user?.isProfileCompleted;

  return (
    <Suspense fallback={<Fallbackloader />}>
      <Routes>
        {/* Redirect '/' to /website */}
        <Route path="/" element={<Navigate to="/website" />} />

        {/* Public Website Route */}
        <Route path="/website" element={<Website />} />
        <Route path="/login" element={<Login />} />
        {/* Authenticated Layout for Logged-In Users here*/}
        <Route path="/" element={<MainLayout />}>
          <Route
            path="profile"
            element={
              isAuthenticated ? (
                isProfileCompleted ? (
                  <Profile />
                ) : (
                  <Navigate to="/Basic_info" />
                )
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="jobs"
            element={isAuthenticated ? <Jobs /> : <Navigate to="/" />}
          />
          <Route path="update" element={<div>Update Page</div>} />
          <Route path="create" element={<div>Create Page</div>} />
        </Route>

        {/* Basic Info Route (Outside MainLayout) */}
        <Route
          path="/Basic_info"
          element={isAuthenticated ? <Basic_Info /> : <Navigate to="/" />}
        />

        {/* Catch-all route: Redirect unknown paths to website */}
        <Route path="*" element={<Navigate to="/website" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
