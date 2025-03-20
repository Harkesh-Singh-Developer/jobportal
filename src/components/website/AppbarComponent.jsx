import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/apnacarrer_logo.png";
function AppBarComponent({ logout, uid }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleLogoutClick = () => {
    logout(); // Call logout function
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img src={logo} alt="apnacareer logo" height={40} />
        </Box>

        {uid ? (
          <>
            <Button color="inherit" onClick={() => navigate("/jobs")}>
              Jobs
            </Button>
            <Button color="inherit" onClick={() => navigate("/profile")}>
              Profile
            </Button>
            <Button color="inherit" onClick={handleLogoutClick}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
