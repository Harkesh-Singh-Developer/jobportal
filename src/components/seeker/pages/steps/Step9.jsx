import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";
import Grid from "@mui/material/Grid2";
import { Paper, Typography, Button } from "@mui/material";
import api from "../../../config/Config";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Step9({ formData, setFormData, onBack, onNext }) {
  const { user } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      uid: user?.uid || "",
      isProfileCompleted: 1,
    },
    onSubmit: async (values) => {
      try {
        const response = await api.post("seeker-profile-complete", values);
        console.log(response.data);
        if (response.data?.status) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper variant="outlined" sx={{ p: 4 }}>
        <ToastContainer />
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="subtitle2" mb={1}>
              Congratulations
            </Typography>
            <Typography variant="caption" color="initial">
              Your profile has been successfully created.
            </Typography>
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
              Proceed
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}

export default Step9;
