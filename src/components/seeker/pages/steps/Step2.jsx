import React from "react";
import Grid from "@mui/material/Grid2";
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
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentYear = new Date().getFullYear();
const completionYears = Array.from(
  { length: currentYear - 1980 + 4 },
  (_, i) => 1980 + i
);
function Step2({ formData, setFormData, onBack, onNext }) {
  const {
    selectedEducation,
    selectedEducationLevel,
    degree,
    college,
    completionMonth,
    completionYear,
  } = formData;

  return (
    <Paper variant="outlined" sx={{ p: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
          Education Details
        </Typography>

        <BorderLinearProgress
          variant="determinate"
          value={20}
          sx={{ flexGrow: 1, height: 2 }}
        />
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        {/* Gender Selection (Male/Female) */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" mb={1}>
            Are you currently pursuing your education?
          </Typography>
          <Chip
            label="Yes"
            size="small"
            color={selectedEducation === "y" ? "primary" : "default"}
            onClick={() => setFormData({ ...formData, selectedEducation: "y" })}
          />
          <Chip
            label="No"
            size="small"
            color={selectedEducation === "n" ? "primary" : "default"}
            onClick={() => setFormData({ ...formData, selectedEducation: "n" })}
          />
        </Grid>

        {/* Education level */}
        {selectedEducation && (
          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle2" mb={1}>
              Select your level of education?
            </Typography>
            <Grid container spacing={2}>
              {[
                "10th or Below",
                "12th Pass",
                "Diploma",
                "ITI",
                "Graduate",
                "Post Graduate",
              ].map((level) => (
                <Grid key={level}>
                  {" "}
                  {/* Adjust xs={6} for 2 per row */}
                  <Chip
                    key={level}
                    label={level}
                    size="small"
                    color={
                      selectedEducationLevel === level ? "primary" : "default"
                    }
                    onClick={() =>
                      setFormData({
                        ...formData,
                        selectedEducationLevel: level,
                      })
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
        {/* Degree Details */}
        {selectedEducationLevel && (
          <>
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle2" mb={1}>
                Education Details
              </Typography>
              <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
                <InputLabel size="small">Degree</InputLabel>
                <Select
                  value={degree}
                  label="Degree"
                  onChange={(e) =>
                    setFormData({ ...formData, degree: e.target.value })
                  }
                >
                  {degrees.map((deg) => (
                    <MenuItem key={deg} value={deg}>
                      {deg}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
                <InputLabel size="small">College</InputLabel>
                <Select
                  value={college}
                  label="College"
                  onChange={(e) =>
                    setFormData({ ...formData, college: e.target.value })
                  }
                >
                  {colleges.map((col) => (
                    <MenuItem key={col} value={col}>
                      {col}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Completion year */}
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle2" mb={1}>
                Completetion Year (or expected)
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 6 }}>
                  <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
                    <InputLabel size="small">Month</InputLabel>
                    <Select
                      value={completionMonth}
                      label="Month"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          completionMonth: e.target.value,
                        })
                      }
                    >
                      {months.map((month) => (
                        <MenuItem key={month} value={month}>
                          {month}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
                    <InputLabel size="small">Year</InputLabel>
                    <Select
                      value={completionYear}
                      label="Year"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          completionYear: e.target.value,
                        })
                      }
                    >
                      {completionYears.map((complyear) => (
                        <MenuItem key={complyear} value={complyear}>
                          {complyear}
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
  );
}

export default Step2;
