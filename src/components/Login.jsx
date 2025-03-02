import React, { useState } from "react";
import Grid from "@mui/material/Grid2"; // Importing Grid2
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import "./theme/Customcss.css";
import { useNavigate } from "react-router-dom";

import { Close } from "@mui/icons-material";

function Login({ setIsAuthenticated }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [btnState, setBtnState] = useState(true);
  const [otp, setOtp] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  // Functions to handle login
  const handlePhone = (e) => {
    e.preventDefault();
    const value = e.target.value.replace(/\D/g, ""); // Ensure only digits
    const trimmedValue = value.slice(0, 10); // Limit input to 10 digits
    setMobile(trimmedValue); // Update state
    setBtnState(trimmedValue.length !== 10);
  };

  const sendOtp = () => {
    // Send OTP to the user, Check registeration, register if not exists
    setStep(2);
  };

  const handleOtp = (e) => {
    const otpValue = e.target.value.slice(0, 4); // Limit input to 4 characters
    setOtp(otpValue);

    if (otpValue.length === 4) {
      // Handle OTP Validation
      if (otpValue === "1234") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("phoneNumber", mobile);

        setSnackbarMessage("Logging in...");
        setSnackbarOpen(true);

        setTimeout(() => {
          setIsAuthenticated(true);
          navigate("/profile"); // Navigate after success
        }, 1500);
      } else {
        setSnackbarMessage("Invalid OTP!");
        setSnackbarOpen(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
      {step === 1 ? (
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          minHeight={"100vh"}
          className="loginScreen"
        >
          <Grid size={{ xs: 10, sm: 8, md: 4 }}>
            {/* Using `size` prop for Grid2 */}
            <Card style={{ padding: "20px", textAlign: "center" }}>
              <CardHeader title="Candidate -- Login" />
              <CardContent>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <Grid>
                    <TextField
                      id="phone"
                      label="Enter Phone Number"
                      variant="standard"
                      size="small"
                      type="tel" // Use "tel" instead of "number" to prevent spinners
                      value={mobile}
                      onChange={handlePhone}
                      sx={{
                        "& input": {
                          textAlign: "center", // Center the input text
                        },
                      }}
                      slotProps={{
                        input: { maxLength: 10 },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      disabled={btnState}
                      onClick={sendOtp}
                    >
                      Login Now
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          minHeight={"100vh"}
          className="loginScreen"
        >
          <Grid size={{ xs: 10, sm: 8, md: 4 }}>
            {/* Using `size` prop for Grid2 */}
            <Card style={{ padding: "20px", textAlign: "center" }}>
              <CardHeader title="Enter OTP" />
              <CardContent>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <Grid>
                    <TextField
                      id="otp"
                      label=""
                      variant="standard"
                      size="small"
                      type="text"
                      value={otp}
                      onChange={handleOtp}
                      sx={{
                        "& input": {
                          textAlign: "center",
                        },
                      }}
                      inputRef={(input) => {
                        if (input) input.maxLength = 4;
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default Login;
