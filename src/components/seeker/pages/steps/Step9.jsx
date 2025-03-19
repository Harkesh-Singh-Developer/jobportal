import React from "react";
import Grid from "@mui/material/Grid2";
import { Paper, Typography, Divider, Button } from "@mui/material";

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
  return (
    <Paper variant="outlined" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" mb={1}>
            Congratulations
          </Typography>
          <Typography variant="caption" color="initial">
            Your profile has been successfully created.
          </Typography>

          <Paper
            sx={{ p: 1, mt: 2, backgroundColor: "#ebfffd" }}
            variant="elevation"
            elevation={0}
          >
            <Divider />
          </Paper>
        </Grid>

        {/* Next Button */}
        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => onNext(formData)}
          >
            Proceed
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Step9;
