import React, { useState, useContext } from "react";
import api from "../../../config/Config";
import Grid from "@mui/material/Grid2";
import AuthContext from "../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { step4Schema } from "../../validationschema/validationSchemas";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  Chip,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Autocomplete } from "@mui/material";
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
  { title: "JavaScript" },
  { title: "TypeScript" },
  { title: "Redux" },
  { title: "Material-UI" },
  { title: "GraphQL" },
];

const allSkills = [
  "React",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "Redux",
  "Material-UI",
  "GraphQL",
  "Bootstrap",
  "Laravel",
];
const initialSuggestedSkills = allSkills.filter(
  (skill) => !initialSkillsOptions.some((option) => option.title === skill)
);
function Step4({ formData, setFormData, onBack, onNext }) {
  const { user } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      uid: user?.uid || "",
      selectedSkills: formData.selectedSkills || [],
    },
    validationSchema: step4Schema,
    onSubmit: async (values) => {
      const formattedData = {
        uid: values.uid,
        skills: values.selectedSkills.map((skill) => skill.title),
      };

      try {
        const response = await api.post("/seeker-skills", formattedData);

        if (response.data?.status) {
          setFormData((prev) => ({ ...prev, ...values }));
          onNext(values);
        } else {
          toast.error(response.data.message || "An API error occurred");
        }
      } catch (error) {
        toast.error(error?.message || "An API error occurred");
      }
    },
  });

  const [suggestedSkills, setSuggestedSkills] = useState(
    initialSuggestedSkills
  );

  // Handle click on suggested skill
  const handleSkillClick = (skill) => {
    const skillObj = { title: skill }; // Convert string to object format
    if (!formik.values.selectedSkills.some((s) => s.title === skill)) {
      const updatedSkills = [...formik.values.selectedSkills, skillObj];
      formik.setFieldValue("selectedSkills", updatedSkills);
      setSuggestedSkills(suggestedSkills.filter((s) => s !== skill)); // Remove from suggestions
    }
  };

  // Handle skill removal from Autocomplete
  const handleSkillRemove = (_, newValue) => {
    formik.setFieldValue("selectedSkills", newValue);
    const removedSkills = formik.values.selectedSkills.filter(
      (skill) => !newValue.some((s) => s.title === skill.title)
    );
    setSuggestedSkills([
      ...suggestedSkills,
      ...removedSkills.map((s) => s.title),
    ]); // Add back to suggestions
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
            Skills
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
            <Typography variant="subtitle2" mb={1}>
              What skills do you have?
            </Typography>

            {/* Autocomplete for Skill Selection */}
            <Autocomplete
              multiple
              id="skills-tag"
              options={initialSkillsOptions}
              getOptionLabel={(option) => option.title}
              value={formik.values.selectedSkills}
              onChange={handleSkillRemove}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Select Skills"
                  placeholder="Skills"
                  error={
                    formik.touched.selectedSkills &&
                    Boolean(formik.errors.selectedSkills)
                  }
                  helperText={
                    formik.touched.selectedSkills &&
                    formik.errors.selectedSkills
                  }
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
                Suggested Skills
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

export default Step4;
