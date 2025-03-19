import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";
import Grid from "@mui/material/Grid2";
import { Paper, Typography, Button } from "@mui/material";
import api from "../../../config/Config";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "@mui/material/styles";

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
  const handleSubmit = async () => {
    try {
      const formData = {
        uid: user?.uid || "",
        isProfileCompleted: 1,
      };
      const response = await api.post("seeker-profile-complete", formData);
      console.log(response.data);
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
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
            onClick={handleSubmit}
          >
            Proceed
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Step9;
