import React, { useEffect } from "react";
import { encryptUrlParams, decryptUrlParams } from "../../../config/Config";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import JobSearch from "./JobSearch";

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
    <>
      <JobSearch />
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid size={{ xs: 11, sm: 6, md: 6 }}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="">CM</Avatar>}
              action={<IconButton aria-label=""></IconButton>}
              title="Job Title"
              subheader="Company Name"
            />
            <CardContent>
              <Grid container justifyContent={"space-between"}>
                <Grid>
                  <Typography variant="body2">
                    ₹15,000 - ₹30,000 monthly
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2">Sector 3, Noida</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 2, md: 2 }}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="">CM</Avatar>}
              action={<IconButton aria-label=""></IconButton>}
              title="Job Title"
              subheader="Company Name"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Jobdetails;
