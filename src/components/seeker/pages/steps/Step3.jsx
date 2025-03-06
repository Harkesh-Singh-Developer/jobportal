import React from "react";
import Grid from "@mui/material/Grid2";
import banner1 from "../../../../assets/images/banner1.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  Paper,
  Box,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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
const degrees = ["BA", "BCA", "MCA", "BBA", "MBA"];
const colleges = ["IGNOU", "DU", "MDU", "Other"];
const expMonths = ["1", "2", "3", "4"];

const expYears = ["1", "2", "3", "4"];
function Step3({ formData, setFormData, onBack, onNext }) {
  const { experience, expMonth, expYear } = formData;

  return (
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
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <IconButton onClick={onBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
              Experience Details
            </Typography>

            <BorderLinearProgress
              variant="determinate"
              value={40}
              sx={{ flexGrow: 1, height: 2 }}
            />
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            {/* Gender Selection (Male/Female) */}
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle2" mb={1}>
                Do you have work experience?
              </Typography>
              <Chip
                label="Yes"
                size="small"
                color={experience === "y" ? "primary" : "default"}
                onClick={() => setFormData({ ...formData, experience: "y" })}
              />
              <Chip
                label="No"
                size="small"
                color={experience === "n" ? "primary" : "default"}
                onClick={() => setFormData({ ...formData, experience: "n" })}
              />
            </Grid>

            {/* Education level */}
            {experience === "y" && (
              <>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle2" mb={1}>
                    Total years of experience
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 6 }}>
                      <FormControl
                        sx={{ minWidth: 120 }}
                        size="small"
                        fullWidth
                      >
                        <InputLabel size="small">Year</InputLabel>
                        <Select
                          value={expYear}
                          label="Year"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expYear: e.target.value,
                            })
                          }
                        >
                          {expYears.map((complyear) => (
                            <MenuItem key={complyear} value={complyear}>
                              {complyear}
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
                        <InputLabel size="small">Month</InputLabel>
                        <Select
                          value={expMonth}
                          label="Months"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expMonth: e.target.value,
                            })
                          }
                        >
                          {expMonths.map((month) => (
                            <MenuItem key={month} value={month}>
                              {month}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    id="jobTitle"
                    label="Job Title"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
                    <InputLabel size="small">Job Role</InputLabel>
                    <Select label="Job Role">
                      <MenuItem value={"Web Developer"}>Web Developer</MenuItem>
                      <MenuItem value={"Graphic Designer"}>
                        Graphic Designer
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    id="companyName"
                    label="Company Name"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
                    <InputLabel size="small">Industry</InputLabel>
                    <Select label="Industry">
                      <MenuItem value={"IT/ITES"}>IT/ITES</MenuItem>
                      <MenuItem value={"Hospitality"}>Hospitality</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    id="currentSalary"
                    label="Current Salary"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupeeIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle2" mb={1}>
                    Start Date
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 6 }}>
                      <FormControl
                        sx={{ minWidth: 120 }}
                        size="small"
                        fullWidth
                      >
                        <InputLabel size="small">Year</InputLabel>
                        <Select
                          value={expYear}
                          label="Year"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expYear: e.target.value,
                            })
                          }
                        >
                          {expYears.map((complyear) => (
                            <MenuItem key={complyear} value={complyear}>
                              {complyear}
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
                        <InputLabel size="small">Month</InputLabel>
                        <Select
                          value={expMonth}
                          label="Months"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expMonth: e.target.value,
                            })
                          }
                        >
                          {expMonths.map((month) => (
                            <MenuItem key={month} value={month}>
                              {month}
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => onNext(formData)}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Step3;
