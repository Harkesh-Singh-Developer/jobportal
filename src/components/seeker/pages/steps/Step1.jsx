import React, { useState } from "react";
import banner1 from "../../../../assets/images/banner1.png";
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
  const { name, dob, selectedGender, email } = formData;

  const handleNext = () => {
    // Validate if necessary

    onNext({ name, dob, selectedGender, email });
  };

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
                size="small"
                required
                value={name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                required
                value={dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
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
                onClick={() =>
                  setFormData({ ...formData, selectedGender: "M" })
                }
              />
              <Chip
                label="Female"
                color={selectedGender === "F" ? "primary" : "default"}
                onClick={() =>
                  setFormData({ ...formData, selectedGender: "F" })
                }
              />
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Email (Optional)"
                size="small"
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Grid>

            {/* Submit Button */}
            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleNext}
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

export default Step1;
