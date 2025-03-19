import React from "react";
import { useFormik } from "formik";
import api from "../../../config/Config";
import { useContext } from "react";
import AuthContext from "../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
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
  CircularProgress,
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
const startYears = Array.from(
  { length: 20 },
  (_, i) => new Date().getFullYear() - i
);
const startMonths = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

const expMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const expYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Step3({ formData, setFormData, onBack, onNext }) {
  const { user } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      uid: user?.uid || "",
      experienceStatus: formData.experienceStatus || "",
      experienceYear: formData.experienceYear || "",
      experienceMonth: formData.experienceMonth || "",
      jobTitle: formData.jobTitle || "",
      jobRole: formData.jobRole || "",
      jobType: formData.jobType || "",
      companyName: formData.companyName || "",
      industry: formData.industry || "",
      monthlySalary: formData.monthlySalary || 0,
      startCompanyMonth: formData.startCompanyMonth || "",
      startCompanyYear: formData.startCompanyYear || "",
    },
    validationSchema: step3Schema,
    onSubmit: async (values) => {
      try {
        let formattedData = { ...values };
        if (values.experienceStatus === 0) {
          formattedData = {
            uid: values.uid,
            experienceStatus: 0,
            experienceYear: null,
            experienceMonth: null,
            jobTitle: null,
            jobRole: null,
            JobType: null, // 1 for full time, 0 for part time
            companyName: null,
            industry: null,
            monthlySalary: null,
            startCompanyMonth: null,
            startCompanyYear: null,
          };
        }
        // console.log(formattedData);
        const response = await api.post("/seeker-experience", formattedData);
        if (response.data?.status) {
          setFormData((prev) => ({ ...prev, ...values }));
          onNext(values);
        } else {
          toast.error(response.data?.message);
        }
      } catch (error) {
        toast.error("API Error");
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <ToastContainer />
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
              color={
                formik.values.experienceStatus === 1 ? "primary" : "default"
              }
              onClick={() => formik.setFieldValue("experienceStatus", 1)}
            />
            <Chip
              label="No"
              size="small"
              color={
                formik.values.experienceStatus === 0 ? "primary" : "default"
              }
              onClick={() => formik.setFieldValue("experienceStatus", 0)}
            />

            {/* Error */}
            {formik.touched.experienceStatus &&
              formik.errors.experienceStatus && (
                <Typography variant="caption" color="error">
                  {formik.errors.experienceStatus}
                </Typography>
              )}
            {/* Error */}
          </Grid>

          {/* Education level */}
          {formik.values.experienceStatus === 1 && (
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
                        formik.touched.experienceYear &&
                        Boolean(formik.errors.experienceYear)
                      }
                    >
                      <InputLabel size="small">Year</InputLabel>
                      <Select
                        name="experienceYear"
                        label="Year"
                        value={formik.values.experienceYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {expYears.map((complyear) => (
                          <MenuItem key={complyear} value={complyear}>
                            {complyear}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.experienceYear &&
                        formik.errors.experienceYear && (
                          <FormHelperText>
                            {formik.errors.experienceYear}
                          </FormHelperText>
                        )}
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <FormControl
                      sx={{ minWidth: 120 }}
                      size="small"
                      fullWidth
                      error={
                        formik.touched.experienceMonth &&
                        Boolean(formik.errors.experienceMonth)
                      }
                    >
                      <InputLabel size="small">Month</InputLabel>
                      <Select
                        name="experienceMonth"
                        label="Months"
                        value={formik.values.experienceMonth}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {expMonths.map((month) => (
                          <MenuItem key={month} value={month}>
                            {month}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.experienceMonth &&
                        formik.errors.experienceMonth && (
                          <FormHelperText>
                            {formik.errors.experienceMonth}
                          </FormHelperText>
                        )}
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  name="jobTitle"
                  label="Job Title"
                  fullWidth
                  size="small"
                  value={formik.values.jobTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.jobTitle && Boolean(formik.errors.jobTitle)
                  }
                  helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <FormControl
                  sx={{ minWidth: 120 }}
                  size="small"
                  fullWidth
                  error={
                    formik.touched.jobRole && Boolean(formik.errors.jobRole)
                  }
                >
                  <InputLabel size="small">Job Role</InputLabel>
                  <Select
                    name="jobRole"
                    label="Job Role"
                    value={formik.values.jobRole}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={"Web Developer"}>Web Developer</MenuItem>
                    <MenuItem value={"Graphic Designer"}>
                      Graphic Designer
                    </MenuItem>
                  </Select>
                  {formik.touched.jobRole && formik.errors.jobRole && (
                    <FormHelperText>{formik.errors.jobRole}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  id="companyName"
                  name="companyName"
                  label="Company Name"
                  fullWidth
                  size="small"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.companyName &&
                    Boolean(formik.errors.companyName)
                  }
                  helperText={
                    formik.touched.companyName && formik.errors.companyName
                  }
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <FormControl
                  sx={{ minWidth: 120 }}
                  size="small"
                  fullWidth
                  error={
                    formik.touched.industry && Boolean(formik.errors.industry)
                  }
                >
                  <InputLabel size="small">industry</InputLabel>
                  <Select
                    label="Industry"
                    name="industry"
                    value={formik.values.industry}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={"IT/ITES"}>IT/ITES</MenuItem>
                    <MenuItem value={"Hospitality"}>Hospitality</MenuItem>
                  </Select>
                  {formik.touched.industry && formik.errors.industry && (
                    <FormHelperText>{formik.errors.industry}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle2" mb={1}>
                  What type of Job?
                </Typography>
                <Chip
                  label="Full Time"
                  size="small"
                  color={formik.values.jobType === 1 ? "primary" : "default"}
                  onClick={() => formik.setFieldValue("jobType", 1)}
                />
                <Chip
                  label="Part Time"
                  size="small"
                  color={formik.values.jobType === 0 ? "primary" : "default"}
                  onClick={() => formik.setFieldValue("jobType", 0)}
                />

                {/* Error */}
                {formik.touched.jobType && formik.errors.jobType && (
                  <Typography variant="caption" color="error">
                    {formik.errors.jobType}
                  </Typography>
                )}
                {/* Error */}
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  name="monthlySalary"
                  label="Current Salary"
                  type="number"
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.monthlySalary}
                  error={
                    formik.touched.monthlySalary &&
                    Boolean(formik.errors.monthlySalary)
                  }
                  helperText={
                    formik.touched.monthlySalary && formik.errors.monthlySalary
                  }
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
                      error={
                        formik.touched.startCompanyYear &&
                        Boolean(formik.errors.startCompanyYear)
                      }
                    >
                      <InputLabel size="small">Year</InputLabel>
                      <Select
                        label="Year"
                        name="startCompanyYear"
                        onBlur={formik.handleBlur}
                        value={formik.values.startCompanyYear}
                        onChange={formik.handleChange}
                      >
                        {startYears.map((complyear) => (
                          <MenuItem key={complyear} value={complyear}>
                            {complyear}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.startCompanyYear &&
                        formik.errors.startCompanyYear && (
                          <FormHelperText>
                            {formik.errors.startCompanyYear}
                          </FormHelperText>
                        )}
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <FormControl
                      sx={{ minWidth: 120 }}
                      size="small"
                      fullWidth
                      error={
                        formik.touched.startCompanyMonth &&
                        Boolean(formik.errors.startCompanyMonth)
                      }
                    >
                      <InputLabel size="small">Month</InputLabel>
                      <Select
                        name="startCompanyMonth"
                        value={formik.values.startCompanyMonth}
                        label="Months"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {startMonths.map((month) => (
                          <MenuItem key={month.value} value={month.value}>
                            {month.label}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.startCompanyMonth &&
                        formik.errors.startCompanyMonth && (
                          <FormHelperText>
                            {formik.errors.startCompanyMonth}
                          </FormHelperText>
                        )}
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
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Next"
              )}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}

export default Step3;
