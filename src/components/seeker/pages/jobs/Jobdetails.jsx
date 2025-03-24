import React, { useEffect } from "react";
import { encryptUrlParams, decryptUrlParams } from "../../../config/Config";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import JobSearch from "./JobSearch";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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
          <Card variant="outlined">
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
              <Paper sx={{ backgroundColor: "#f4f4f4" }} elevation={0}>
                <Grid container spacing={2} p={2}>
                  <Grid container>
                    <Grid>
                      <Chip
                        icon={<WorkHistoryIcon />}
                        label="3 - 7 years"
                        size="small"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid>
                      <Chip
                        icon={<ApartmentIcon />}
                        label="Work From Home"
                        size="small"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid>
                      <Chip
                        icon={<LocationOnIcon />}
                        label="Noida"
                        size="small"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid>
                      <Chip
                        icon={<AccessTimeIcon />}
                        label="Full Time"
                        size="small"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={1}
                mt={1}
              >
                <Grid>
                  <Typography variant="body2">
                    <b>Posted:</b> 01/01/2025
                  </Typography>
                </Grid>
                <Grid>
                  {" "}
                  <Typography variant="body2">
                    <b>Openings:</b> 1
                  </Typography>
                </Grid>
                <Grid>
                  <Button variant="text" color="info">
                    Share
                  </Button>
                  <Button variant="contained" color="info">
                    Apply Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "block" } }}>
          <Paper elevation={1}>
            <Typography variant="h6">
              Jobs you might be interested in
            </Typography>
            <Grid container>
              <Grid>
                <Card>
                  <CardHeader
                    avatar={<Avatar aria-label="">VT</Avatar>}
                    action={<IconButton aria-label=""></IconButton>}
                    title="Job Title"
                    subheader="Company Name"
                  />
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Jobdetails;
