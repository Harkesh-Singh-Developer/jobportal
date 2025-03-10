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
  Autocomplete,
  TextField,
  Stack,
  Chip,
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

const initialSkillsOptions = [
  { title: "React" },
  { title: "Node.js" },
  { title: "Vue" },
  { title: "React" },
  { title: "Node.js" },
  { title: "Vue" },
  { title: "React" },
  { title: "Node.js" },
  { title: "Vue" },
  { title: "React" },
  { title: "Node.js" },
  { title: "Vue" },
];
const initialSuggestedSkills = ["Web Developer", "Backend Developer"];

function Step7({ formData, setFormData, onBack, onNext }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [suggestedSkills, setSuggestedSkills] = useState(
    initialSuggestedSkills
  );
  // Handle click on suggested skill
  const handleSkillClick = (skill) => {
    setSelectedSkills([...selectedSkills, { title: skill }]); // Add to selected skills
    setSuggestedSkills(suggestedSkills.filter((s) => s !== skill)); // Remove from suggestions
  };

  // Handle skill removal from Autocomplete
  const handleSkillRemove = (event, newValue) => {
    const removedSkills = selectedSkills.filter(
      (skill) => !newValue.includes(skill)
    );
    setSelectedSkills(newValue);
    setSuggestedSkills([
      ...suggestedSkills,
      ...removedSkills.map((s) => s.title),
    ]); // Add back to suggestions
  };
  return (
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
            What job title/role you are looking for?
          </Typography>
          <Typography variant="caption" color="initial">
            You can select upto 5 roles
          </Typography>

          {/* Autocomplete for Skill Selection */}
          <Autocomplete
            multiple
            id="skills-tag"
            options={initialSkillsOptions}
            getOptionLabel={(option) => option.title}
            value={selectedSkills}
            onChange={handleSkillRemove}
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

          {/* Suggested Skills Section */}
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
              {suggestedSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  clickable
                  onClick={() => handleSkillClick(skill)}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Employment Type */}
        <Grid size={{ xs: 12 }}></Grid>

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

export default Step7;
