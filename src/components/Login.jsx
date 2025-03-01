import React, { useState } from "react";
import Grid from "@mui/material/Grid2"; // Importing Grid2
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from "@mui/material";
import "./theme/Customcss.css";
function Login() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [btnState, setBtnState] = useState(true);
  const [otp, setOtp] = useState("");
  const loginType = "Candidate";

  const handlePhone = (e) => {
    e.preventDefault();
    const value = e.target.value.replace(/\D/g, ""); // Ensure only digits
    const trimmedValue = value.slice(0, 10); // Limit input to 10 digits
    setMobile(trimmedValue); // Update state
    setBtnState(trimmedValue.length !== 10);
  };

  const sendOtp = () => {
    // Send OTP to the user
    setStep(2);
  };
  return (
    <React.Fragment>
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
              <CardHeader title={`${loginType} Login`} />
              <CardContent>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <Grid item>
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
                  <Grid item>
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
                  <Grid item>
                    <TextField
                      id="otp"
                      label=""
                      variant="standard"
                      size="small"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      sx={{
                        "& input": {
                          textAlign: "center", // Center the input text
                        },
                      }}
                      slotProps={{
                        input: { maxLength: 4 },
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
