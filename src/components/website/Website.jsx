import React, { useContext } from "react";
import AuthContext from "../context/Auth";
import AppBarComponent from "./AppbarComponent";

function Website() {
  const { user, logout } = useContext(AuthContext);
  const uid = user?.uid;

  return (
    <React.Fragment>
      {/* AppBar for the Website */}
      <AppBarComponent logout={logout} uid={uid} hideMenus={false} />

      {/* Website Content */}
      <div style={{ padding: "20px" }}>
        <h1>Welcome to Our Website</h1>
        <p>This is a public landing page.</p>
      </div>
    </React.Fragment>
  );
}

export default Website;
