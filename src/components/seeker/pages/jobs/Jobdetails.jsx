import React, { useEffect } from "react";
import { encryptUrlParams, decryptUrlParams } from "../../../config/Config";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";

function Jobdetails() {
  const { jobId } = useParams();
  const decryptedJobId = decryptUrlParams(jobId);

  const navigate = useNavigate();
  useEffect(() => {
    if (!jobId) {
      navigate("/jobs"); // Redirect to homepage if jobId is missing
    }
  }, [jobId, navigate]);

  return (
    <Grid container justifyContent={"center"}>
      <Grid size={{ xs: 11, sm: 6, md: 6 }}>
        
      </Grid>
      <Grid
        size={{ xs: 12, sm: 2, md: 2 }}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Similar Jobs
      </Grid>
    </Grid>
  );
}

export default Jobdetails;
