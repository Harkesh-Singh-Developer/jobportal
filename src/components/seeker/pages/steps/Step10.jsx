import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField, Button, Paper, Typography, Chip } from "@mui/material";

function Step10() {
  const formik = useFormik({
    initialValues: {
      name: "",
      selectedEducation: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.selectedEducation) {
        errors.selectedEducation = "Education selection is required";
      }
      return errors;
    },
  });
  console.log(formik.errors);
  return (
    <Paper sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h6" mb={2}>
        Simple Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <Chip
          label="Yes"
          size="small"
          color={
            formik.values.selectedEducation === "y" ? "primary" : "default"
          }
          onClick={() => formik.setFieldValue("selectedEducation", "y")}
        />
        <Chip
          label="No"
          size="small"
          color={
            formik.values.selectedEducation === "n" ? "primary" : "default"
          }
          onClick={() => formik.setFieldValue("selectedEducation", "n")}
        />
        {/* Show validation error for education selection */}
        {formik.touched.selectedEducation &&
          formik.errors.selectedEducation && (
            <Typography variant="caption" color="error">
              {formik.errors.selectedEducation}
            </Typography>
          )}
          
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default Step10;
