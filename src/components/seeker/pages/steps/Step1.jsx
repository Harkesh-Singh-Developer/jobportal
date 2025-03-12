import React, { useState } from "react";
import { useFormik } from "formik";
import { step1Schema } from "../../validationschema/validationSchemas";
import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Chip,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
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
function Step1({ formData, setFormData, onNext }) {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: step1Schema,
    onSubmit: async (values) => {
      setFormData(values);
      onNext(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper variant="outlined" sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
            Basic Details
          </Typography>

          <BorderLinearProgress
            variant="determinate"
            value={5}
            sx={{ flexGrow: 1, height: 2 }}
          />
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {/* Full Name */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Full Name"
              size="small"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          {/* Date of Birth */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              type="date"
              label="Date of Birth"
              size="small"
              slotProps={{ inputLabel: { shrink: true } }}
              id="dob"
              name="dob"
              required
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
            />
          </Grid>

          {/* Gender Selection (Male/Female) */}
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1" mb={1}>
              Select Gender:
            </Typography>
            <Chip
              label="Male"
              color={
                formik.values.selectedGender === "M" ? "primary" : "default"
              }
              onClick={() => formik.setFieldValue("selectedGender", "M")}
            />
            <Chip
              label="Female"
              color={
                formik.values.selectedGender === "F" ? "primary" : "default"
              }
              onClick={() => formik.setFieldValue("selectedGender", "F")}
            />
            {formik.touched.selectedGender && formik.errors.selectedGender && (
              <Typography color="error" variant="body2">
                {formik.errors.selectedGender}
              </Typography>
            )}
          </Grid>

          {/* Email */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email (Optional)"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          {/* Submit Button */}
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

export default Step1;
