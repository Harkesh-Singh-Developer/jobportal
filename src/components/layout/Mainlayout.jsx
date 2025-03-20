import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AuthContext from "../context/Auth";
import AppBarComponent from "../website/AppbarComponent";

const MainLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const uid = user?.uid;

  // Hide menu items only on the Basic Info page
  const hideMenus = location.pathname === "/Basic_info";

  return (
    <React.Fragment>
      {/* AppBarComponent always present, dynamically hides menus */}
      <AppBarComponent logout={logout} uid={uid} hideMenus={hideMenus} />
      <Outlet />
    </React.Fragment>
  );
};

export default MainLayout;
