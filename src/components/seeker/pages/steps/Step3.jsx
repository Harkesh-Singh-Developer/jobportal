import React from "react";
import { useFormik } from "formik";
import { step3Schema } from "../../validationschema/validationSchemas";
import Grid from "@mui/material/Grid2";
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
  FormHelperText,
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

const expMonths = ["1", "2", "3", "4"];
const expYears = ["1", "2", "3", "4"];

function Step3({ formData, setFormData, onBack, onNext }) {
  const formik = useFormik({
    initialValues: {
      experience: formData.experience || "",
      expYear: formData.expYear || "",
      expMonth: formData.expMonth || "",
    },
    validationSchema: step3Schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
              color={formik.values.experience === "y" ? "primary" : "default"}
              onClick={() => formik.setFieldValue("experience", "y")}
            />
            <Chip
              label="No"
              size="small"
              color={formik.values.experience === "n" ? "primary" : "default"}
              onClick={() => formik.setFieldValue("experience", "n")}
            />

            {/* Error */}
            {formik.touched.experience && formik.errors.experience && (
              <Typography variant="caption" color="error">
                {formik.errors.experience}
              </Typography>
            )}
            {/* Error */}
          </Grid>

          {/* Education level */}
          {formik.values.experience === "y" && (
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
                      error={
                        formik.touched.experience &&
                        Boolean(formik.errors.experience)
                      }
                    >
                      <InputLabel size="small">Year</InputLabel>
                      <Select
                        name="expYear"
                        label="Year"
                        value={formik.values.expYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {expYears.map((complyear) => (
                          <MenuItem key={complyear} value={complyear}>
                            {complyear}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.experience &&
                        formik.errors.experience && (
                          <FormHelperText>
                            {formik.errors.experience}
                          </FormHelperText>
                        )}
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
                      <InputLabel size="small">Month</InputLabel>
                      <Select
                        name="expMonth"
                        label="Months"
                        value={formik.values.expMonth}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
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
                    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
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
            <Button variant="contained" color="primary" fullWidth type="submit">
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}

export default Step3;
