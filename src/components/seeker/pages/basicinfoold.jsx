import React, { useContext, useEffect, useState } from "react";
import api from "../../config/Config";
import Grid from "@mui/material/Grid2";
import logo from "../../../assets/logo/apnacarrer_logo.png";
import banner1 from "../../../assets/images/banner1.png";
import { Close } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// Appbar Imports
import AuthContext from "../../context/Auth";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Typography,
  Menu,
  Button,
  MenuItem,
  TextField,
  Chip,
  Divider,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

function Basic_Info() {
  const { user, logout } = useContext(AuthContext);
  const [uid, setUid] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //   Form Elements
  const [step, setStep] = useState(2);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [email, setEmail] = useState("");

  const [selectedEducation, setSelectedEducation] = useState("");
  const [selectedEducationLevel, setSelectedEducationLevel] = useState("");
  const degrees = ["BA", "BCA", "MCA", "BBA", "MBA"];
  const [degree, setDegree] = useState("");
  const colleges = ["IGNOU", "DU", "MDU", "Other"];
  const [college, setCollege] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [completionMonth, setCompletionMonth] = useState("");
  const [completionYear, setCompletionYear] = useState("");
  const currentYear = new Date().getFullYear();
  const completionYears = Array.from(
    { length: currentYear - 1980 + 4 },
    (_, i) => 1980 + i
  );
  //   Form Elements

  useEffect(() => {
    setUid(user?.uid);
  }, [user]);

  // LinerProgress Adjust
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));

  // LinerProgress Adjust
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

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

  //   handle Step 1
  const handleStep1 = async () => {
    const data = {
      uid: uid,
      full_name: name,
      gender: selectedGender,
      email: email,
      date_of_birth: dob,
    };
    console.log(data);

    try {
      setSnackbarMessage("Sending Data...");
      setSnackbarOpen(true);
      const response = await api.post("/seeker-registration", data);
      console.log(response);
      if (response.data.status) {
        setStep(2);
      } else {
        setSnackbarMessage(`!error - ${response.data.message} `);
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage("API Error: ", error);
      setSnackbarOpen(true);
    }
  };
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbarOpen}
        message={snackbarMessage}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
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
      {step === 1 && (
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
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
                  Basic Details
                </Typography>

                <BorderLinearProgress
                  variant="determinate"
                  value={10}
                  sx={{ flexGrow: 1, height: 2 }}
                />
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {/* Full Name */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Grid>

                {/* Date of Birth */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    required
                    type="date"
                    slotProps={{ inputLabel: { shrink: true } }}
                    variant="outlined"
                    size="small"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                </Grid>

                {/* Gender Selection (Male/Female) */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="body1" mb={1}>
                    Select Gender:
                  </Typography>
                  <Chip
                    label="Male"
                    color={selectedGender === "M" ? "primary" : "default"}
                    onClick={() => setSelectedGender("M")}
                    sx={{ mr: 1 }}
                  />
                  <Chip
                    label="Female"
                    color={selectedGender === "F" ? "primary" : "default"}
                    onClick={() => setSelectedGender("F")}
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Email -(Optional)"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleStep1}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Step 2 - Education */}
      {step === 2 && (
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
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <IconButton
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
                  Education Details
                </Typography>

                <BorderLinearProgress
                  variant="determinate"
                  value={20}
                  sx={{ flexGrow: 1, height: 2 }}
                />
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {/* Gender Selection (Male/Female) */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle2" mb={1}>
                    Are you currently pursuing your education?
                  </Typography>
                  <Chip
                    label="Yes"
                    size="small"
                    color={selectedEducation === "y" ? "primary" : "default"}
                    onClick={() => setSelectedEducation("y")}
                    sx={{ mr: 1 }}
                  />
                  <Chip
                    label="No"
                    size="small"
                    color={selectedEducation === "n" ? "primary" : "default"}
                    onClick={() => setSelectedEducation("n")}
                  />
                </Grid>

                {/* Education level */}
                {selectedEducation && (
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" mb={1}>
                      Select your level of education?
                    </Typography>
                    <Grid container spacing={2}>
                      {[
                        "10th or Below",
                        "12th Pass",
                        "Diploma",
                        "ITI",
                        "Graduate",
                        "Post Graduate",
                      ].map((label) => (
                        <Grid key={label}>
                          {" "}
                          {/* Adjust xs={6} for 2 per row */}
                          <Chip
                            label={label}
                            size="small"
                            color={
                              selectedEducationLevel === label
                                ? "primary"
                                : "default"
                            }
                            onClick={() => setSelectedEducationLevel(label)}
                            // Makes Chip full-width inside Grid item
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                )}
                {/* Degree Details */}
                {selectedEducationLevel && (
                  <>
                    <Grid size={{ xs: 12 }}>
                      <Typography variant="subtitle2" mb={1}>
                        Education Details
                      </Typography>
                      <FormControl
                        sx={{ minWidth: 120 }}
                        size="small"
                        fullWidth
                      >
                        <InputLabel size="small">Degree</InputLabel>
                        <Select
                          value={degree}
                          label="Degree"
                          onChange={(e) => setDegree(e.target.value)}
                        >
                          {degrees.map((deg) => (
                            <MenuItem key={deg} value={deg}>
                              {deg}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <FormControl
                        sx={{ minWidth: 120 }}
                        size="small"
                        fullWidth
                      >
                        <InputLabel size="small">College</InputLabel>
                        <Select
                          value={college}
                          label="College"
                          onChange={(e) => setCollege(e.target.value)}
                        >
                          {colleges.map((coll) => (
                            <MenuItem key={coll} value={coll}>
                              {coll}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    {/* Completion year */}
                    <Grid size={{ xs: 12 }}>
                      <Typography variant="subtitle2" mb={1}>
                        Completetion Year (or expected)
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 6 }}>
                          <FormControl
                            sx={{ minWidth: 120 }}
                            size="small"
                            fullWidth
                          >
                            <InputLabel size="small">Month</InputLabel>
                            <Select
                              value={completionMonth}
                              label="Month"
                              onChange={(e) =>
                                setCompletionMonth(e.target.value)
                              }
                            >
                              {months.map((month) => (
                                <MenuItem key={month} value={month}>
                                  {month}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <FormControl
                            sx={{ minWidth: 120 }}
                            size="small"
                            fullWidth
                          >
                            <InputLabel size="small">Year</InputLabel>
                            <Select
                              value={completionYear}
                              label="Year"
                              onChange={(e) =>
                                setCompletionYear(e.target.value)
                              }
                            >
                              {completionYears.map((complyear) => (
                                <MenuItem key={complyear} value={complyear}>
                                  {complyear}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}

                {/* Submit Button Step 2 */}
                <Grid size={{ xs: 12 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default Basic_Info;

<SnackbarComponent
  open={snackbarOpen}
  message={snackbarMessage}
  severity="error" // or "success", "warning", "info"
  onClose={handleCloseSnackbar}
/>;
