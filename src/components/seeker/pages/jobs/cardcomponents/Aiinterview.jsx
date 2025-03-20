import { Paper, Typography, Button } from "@mui/material";
import React from "react";

function Aiinterview() {
  return (
    <Paper
      elevation={0}
      sx={{
        background:
          "linear-gradient(117deg, rgba(58,173,163,1) 0%, rgba(113,216,204,1) 100%)",
        borderRadius: "10px",
        p: 2,
      }}
    >
      <Typography variant="body1">Improve your skills with </Typography>
      <Typography variant="h5" color="initial">
        AI Mock Interview
      </Typography>
      <Button variant="contained" color="secondary" size="small">
        Start Now
      </Button>
    </Paper>
  );
}

export default Aiinterview;
