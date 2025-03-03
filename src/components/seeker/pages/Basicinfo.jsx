import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid2";
import logo from "../../../assets/logo/apnacarrer_logo.png";
import banner1 from "/images/banner1.png";
// Appbar Imports
import AuthContext from "../../context/Auth";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Paper,
  Typography,
  Menu,
  Button,
  MenuItem,
  TextField,
  Chip,
} from "@mui/material";

function Basic_Info() {
  const { logout } = useContext(AuthContext);
  const [selectedGender, setSelectedGender] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img src={logo} alt="Logo" height={40} />
            </Box>

            {/* Desktop Dashboard Button */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </Box>

            {/* Dropdown Menu for Both Desktop & Mobile */}
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Jobs</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <Grid
        container
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        mt={5}
      >
        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={banner1} alt="Banner1" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <Paper variant="outlined" sx={{ p: 4 }}>
            <Typography variant="h6" mb={2}>
              Complete Your Profile
            </Typography>

            <Grid container spacing={2}>
              {/* Full Name */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              {/* Date of Birth */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  size="small"
                />
              </Grid>

              {/* Gender Selection (Male/Female) */}
              <Grid size={{ xs: 12 }}>
                <Typography variant="body1" mb={1}>
                  Select Gender:
                </Typography>
                <Chip
                  label="Male"
                  color={selectedGender === "Male" ? "primary" : "default"}
                  onClick={() => setSelectedGender("Male")}
                  sx={{ mr: 1 }}
                />
                <Chip
                  label="Female"
                  color={selectedGender === "Female" ? "primary" : "default"}
                  onClick={() => setSelectedGender("Female")}
                />
              </Grid>

              {/* Email */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              {/* Submit Button */}
              <Grid size={{ xs: 12 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Basic_Info;
