import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
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

function Step5({ formData, setFormData, onBack, onNext }) {
  const [englishLevel, setEnglishLevel] = useState(formData.englishLevel || "");

  const handleChange = (event) => {
    setEnglishLevel(event.target.value);
    setFormData({ ...formData, englishLevel: event.target.value });
  };

  return (
    <Paper variant="outlined" sx={{ p: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
          Preferred Language
        </Typography>
        <BorderLinearProgress
          variant="determinate"
          value={60}
          sx={{ flexGrow: 1, height: 2 }}
        />
      </Box>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">How good is your English?</FormLabel>
            <RadioGroup value={englishLevel} onChange={handleChange}>
              <FormControlLabel
                value="No English"
                control={<Radio />}
                label="No English"
              />
              <FormControlLabel
                value="Beginner"
                control={<Radio />}
                label="Beginner"
              />
              <FormControlLabel
                value="Intermediate"
                control={<Radio />}
                label="Intermediate"
              />
              <FormControlLabel
                value="Advanced"
                control={<Radio />}
                label="Advanced"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Next Button */}
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

export default Step5;
