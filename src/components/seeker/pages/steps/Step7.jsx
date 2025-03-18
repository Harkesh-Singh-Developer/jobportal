import React, { useState } from "react";
import api from "../../../config/Config";
import { useContext } from "react";
import AuthContext from "../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";

import Grid from "@mui/material/Grid2";
import { useFormik } from "formik";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  Autocomplete,
  TextField,
  Stack,
  Chip,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

// Styled Progress Bar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}));

const allJobRoles = [
  "Web Developer",
  "Backend Developer",
  "Graphic Designer",
  "Marketing Manager",
  "Software Engineer",
  "Data Analyst",
  "Project Manager",
  "UX Designer",
  "Cybersecurity Analyst",
];

const initialJobRolesOptions = allJobRoles.slice(0, 5).map((role) => ({
  title: role,
}));
const initialSuggestedJobRoles = allJobRoles.slice(5);

function Step7({ formData, setFormData, onBack, onNext }) {
  const { user } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      uid: user?.uid || "",
      selectedJobRoles: formData.selectedJobRoles || [],
    },
    onSubmit: async (values) => {
      const formattedData = {
        uid: user?.uid || "",
        jobRoles: values.selectedJobRoles.map((role) => role.title),
      };
      console.log(formattedData);
      try {
        const response = await api.post("/seeker-job-roles", formattedData);
        console.log(response.data);
        if (response.data?.status) {
          setFormData((prev) => ({ ...prev, ...values }));
          onNext(values);
        } else {
          toast.error(response.data?.message || "error occurred");
        }
      } catch (error) {
        toast.error(error?.message || "An API error occurred");
      }
    },
  });

  const [suggestedJobRoles, setSuggestedJobRoles] = useState(
    initialSuggestedJobRoles
  );

  // Handle click on suggested job role
  const handleRoleClick = (role) => {
    if (formik.values.selectedJobRoles.length < 5) {
      const roleObj = { title: role };
      if (!formik.values.selectedJobRoles.some((r) => r.title === role)) {
        const updatedRoles = [...formik.values.selectedJobRoles, roleObj];
        formik.setFieldValue("selectedJobRoles", updatedRoles);
        setSuggestedJobRoles(suggestedJobRoles.filter((r) => r !== role)); // Remove from suggestions
      }
    }
  };

  // Handle job role removal
  const handleRoleRemove = (_, newValue) => {
    formik.setFieldValue("selectedJobRoles", newValue);
    const removedRoles = formik.values.selectedJobRoles.filter(
      (role) => !newValue.some((r) => r.title === role.title)
    );
    setSuggestedJobRoles([
      ...suggestedJobRoles,
      ...removedRoles.map((r) => r.title),
    ]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <ToastContainer />
      <Paper variant="outlined" sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <IconButton onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
            Preferred Job Role
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={80}
            sx={{ flexGrow: 1, height: 2 }}
          />
        </Box>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle2" mb={1}>
              What job title/role are you looking for?
            </Typography>
            <Typography variant="caption" color="initial">
              You can select up to 5 roles
            </Typography>

            {/* Autocomplete for Job Role Selection */}
            <Autocomplete
              multiple
              id="job-roles-tag"
              options={initialJobRolesOptions}
              getOptionLabel={(option) => option.title}
              value={formik.values.selectedJobRoles}
              onChange={handleRoleRemove}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Select Job Role"
                  placeholder="Job title/role"
                />
              )}
            />

            {/* Suggested Job Roles Section */}
            <Paper
              sx={{ p: 1, mt: 2, backgroundColor: "#ebfffd" }}
              variant="elevation"
              elevation={0}
            >
              <Typography variant="subtitle2" color="initial">
                Suggested Job Roles
              </Typography>
              <Divider />
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {suggestedJobRoles.map((role) => (
                  <Chip
                    key={role}
                    label={role}
                    clickable
                    onClick={() => handleRoleClick(role)}
                    color="primary"
                    variant="outlined"
                    disabled={formik.values.selectedJobRoles.length >= 5} // Disable if max selected
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Next Button */}
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

export default Step7;
