import React from "react";
import api from "../../../config/Config";
import { useContext } from "react";
import AuthContext from "../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
import Grid from "@mui/material/Grid2";
import { step5Schema } from "../../validationschema/validationSchemas";
import { useFormik } from "formik";
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
  FormHelperText,
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

function Step5({ formData, setFormData, onBack, onNext }) {
  const { user } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      uid: user?.uid || "",
      engLevel: formData.engLevel || "", // Start as an empty string
    },
    validationSchema: step5Schema,
    validateOnChange: false,
    validateOnBlur: false, // Prevents validation when clicking a radio button
    onSubmit: async (values) => {
      console.log(values);
      setFormData({ ...formData, ...values }); // Store values

      try {
        const response = await api.post("/seeker-languages", values);
        if (response.data?.status) {
          setFormData((prev) => ({ ...prev, ...values }));
          onNext(values);
        } else {
          toast.error("Error submitting data");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
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
            <FormControl
              component="fieldset"
              error={formik.touched.engLevel && Boolean(formik.errors.engLevel)}
            >
              <FormLabel component="legend">
                How good is your English?
              </FormLabel>
              <RadioGroup
                name="engLevel"
                value={formik.values.engLevel}
                onChange={(event) => {
                  formik.setFieldValue("engLevel", Number(event.target.value)); // Convert to number
                  formik.setTouched({ ...formik.touched, engLevel: true }); // Mark as touched
                }}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="No English"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Beginner"
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="Intermediate"
                />
                <FormControlLabel
                  value={4}
                  control={<Radio />}
                  label="Advanced"
                />
              </RadioGroup>
              {formik.touched.engLevel && formik.errors.engLevel && (
                <FormHelperText>{formik.errors.engLevel}</FormHelperText>
              )}
            </FormControl>
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

export default Step5;
