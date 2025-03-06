import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
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

function Step6({ formData, setFormData, onBack, onNext }) {
  const [preferredShifts, setPreferredShifts] = useState(
    formData.preferredShifts || []
  );
  const [employmentType, setEmploymentType] = useState(
    formData.employmentType || ""
  );
  const [jobLocation, setJobLocation] = useState(formData.jobLocation || "");

  // Handle shift selection (checkboxes)
  const handleShiftChange = (event) => {
    const value = event.target.value;
    setPreferredShifts((prev) =>
      prev.includes(value)
        ? prev.filter((shift) => shift !== value)
        : [...prev, value]
    );
    setFormData({ ...formData, preferredShifts });
  };

  // Handle employment type (radio)
  const handleEmploymentChange = (event) => {
    setEmploymentType(event.target.value);
    setFormData({ ...formData, employmentType: event.target.value });
  };

  // Handle job location (radio)
  const handleLocationChange = (event) => {
    setJobLocation(event.target.value);
    setFormData({ ...formData, jobLocation: event.target.value });
  };

  return (
    <Paper variant="outlined" sx={{ p: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
          Preferred Job Type
        </Typography>
        <BorderLinearProgress
          variant="determinate"
          value={60}
          sx={{ flexGrow: 1, height: 2 }}
        />
      </Box>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={2}>
        {/* Preferred Shifts */}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Preferred Shifts</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preferredShifts.includes("Day")}
                    onChange={handleShiftChange}
                    value="Day"
                  />
                }
                label="Day"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preferredShifts.includes("Night")}
                    onChange={handleShiftChange}
                    value="Night"
                  />
                }
                label="Night"
              />
            </FormGroup>
          </FormControl>
        </Grid>

        {/* Employment Type */}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Employment Type</FormLabel>
            <RadioGroup
              value={employmentType}
              onChange={handleEmploymentChange}
            >
              <FormControlLabel
                value="Part-time"
                control={<Radio />}
                label="Part-time"
              />
              <FormControlLabel
                value="Full-time"
                control={<Radio />}
                label="Full-time"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Job Location */}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Job Location</FormLabel>
            <RadioGroup value={jobLocation} onChange={handleLocationChange}>
              <FormControlLabel
                value="Work from Home"
                control={<Radio />}
                label="Work from Home"
              />
              <FormControlLabel
                value="Work from Office"
                control={<Radio />}
                label="Work from Office"
              />
              <FormControlLabel
                value="Field Job"
                control={<Radio />}
                label="Field Job"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Next Button */}
        <Grid item xs={12}>
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
  );
}

export default Step6;
