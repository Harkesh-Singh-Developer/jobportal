import React from "react";
import api from "../../../config/Config";
import { useContext } from "react";
import AuthContext from "../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
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
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFormik } from "formik";
import { step2Schema } from "../../validationschema/validationSchemas";
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
  const { user } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      selectedEducation: formData.selectedEducation || "",
      selectedEducationLevel: formData.selectedEducationLevel || "",
      degree: formData.degree || "",
      college: formData.college || "",
      completionMonth: formData.completionMonth || "",
      completionYear: formData.completionYear || "",
    },
    enableReinitialize: true,

    validationSchema: step2Schema,
    onSubmit: async (values) => {
      const formattedData = {
        uid: user?.uid,
        selectedEducation: values.selectedEducation,
        college: values.college,
        degree: values.degree,
        completionMonth: "10",
        completionYear: "2021",
        college_medium: "English", //Hardcoded
        education_type: "1", //Hardcoded
        education_specialized: "Computer Science", //Hardcoded
      };

      try {
        const response = await api.post("/seeker-education", formattedData);
        console.log(response.data);

        if (response.data?.status) {
          setFormData((prev) => ({ ...prev, ...values }));
          onNext(values);
        } else {
          toast.error("Error submitting data");
        }
      } catch (error) {
        toast.error("API Error");
      }
      // console.log(formattedData);
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
            Education Details -
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
            {/* Error */}
            {formik.touched.selectedEducation &&
              formik.errors.selectedEducation && (
                <Typography variant="caption" color="error">
                  {formik.errors.selectedEducation}
                </Typography>
              )}
            {/* Error */}
          </Grid>

          {/* Education level */}
          {formik.values.selectedEducation === "y" && (
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
                        formik.values.selectedEducationLevel === level
                          ? "primary"
                          : "default"
                      }
                      onClick={() =>
                        formik.setFieldValue("selectedEducationLevel", level)
                      }
                    />
                  </Grid>
                ))}
                {/* Error */}
                {formik.touched.selectedEducationLevel &&
                  formik.errors.selectedEducationLevel && (
                    <Typography variant="caption" color="error">
                      {formik.errors.selectedEducationLevel}
                    </Typography>
                  )}
                {/* Error */}
              </Grid>
            </Grid>
          )}
          {/* Degree Details */}
          {formik.values.selectedEducationLevel && (
            <>
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle2" mb={1}>
                  Education Details
                </Typography>
                <FormControl
                  sx={{ minWidth: 120 }}
                  size="small"
                  fullWidth
                  error={formik.touched.degree && Boolean(formik.errors.degree)}
                >
                  <InputLabel size="small">Degree</InputLabel>
                  <Select
                    name="degree"
                    label="Degree"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.degree || ""}
                  >
                    {degrees.map((deg) => (
                      <MenuItem key={deg} value={deg}>
                        {deg}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.degree && formik.errors.degree && (
                    <FormHelperText>{formik.errors.degree}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <FormControl
                  sx={{ minWidth: 120 }}
                  size="small"
                  fullWidth
                  error={
                    formik.touched.college && Boolean(formik.errors.college)
                  }
                >
                  <InputLabel size="small">College</InputLabel>
                  <Select
                    name="college"
                    label="College"
                    value={formik.values.college || ""}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  >
                    {colleges.map((col) => (
                      <MenuItem key={col} value={col}>
                        {col}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.college && formik.errors.college && (
                    <FormHelperText>{formik.errors.college}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {/* Completion year */}
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle2" mb={1}>
                  Completetion Year (or expected)
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 6 }}>
                    <FormControl
                      sx={{ minWidth: 120 }}
                      size="small"
                      fullWidth
                      error={
                        formik.touched.completionMonth &&
                        Boolean(formik.errors.completionMonth)
                      }
                    >
                      <InputLabel size="small">Month</InputLabel>
                      <Select
                        name="completionMonth"
                        label="Month"
                        value={formik.values.completionMonth || ""}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      >
                        {months.map((month) => (
                          <MenuItem key={month} value={month}>
                            {month}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.completionMonth &&
                        formik.errors.completionMonth && (
                          <FormHelperText>
                            {formik.errors.completionMonth}
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
                        formik.touched.completionYear &&
                        Boolean(formik.errors.completionYear)
                      }
                    >
                      <InputLabel size="small">Year</InputLabel>
                      <Select
                        name="completionYear"
                        label="Year"
                        value={formik.values.completionYear || ""}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      >
                        {completionYears.map((complyear) => (
                          <MenuItem key={complyear} value={complyear}>
                            {complyear}
                          </MenuItem>
                        ))}
                      </Select>
                      {/* Error message moved outside the Select component */}
                      {formik.touched.completionYear &&
                        formik.errors.completionYear && (
                          <FormHelperText>
                            {formik.errors.completionYear}
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
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
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

export default Step2;
