import React, { useEffect, useState } from "react";
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
  Avatar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import JobSearch from "./JobSearch";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Jobdetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const decryptedJobId = decryptUrlParams(jobId);
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleApply = () => {
    if (applied) return;

    setLoading(true);

    // Simulate API call or processing delay
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
    }, 2000);
  };

  useEffect(() => {
    if (!jobId) {
      navigate("/jobs"); // Redirect to homepage if jobId is missing
    }
  }, [jobId, navigate]);

  return (
    <>
      <JobSearch />
      <Grid container justifyContent={"center"} spacing={2}>
        {/* Left Column (Job Details & Highlights) */}
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Grid container spacing={2}>
            {/* Job Card */}
            <Grid size={{ xs: 12 }}>
              <Card variant="outlined">
                <CardHeader
                  avatar={<Avatar>CM</Avatar>}
                  title="Job Title"
                  subheader="Company Name"
                />
                <CardContent>
                  <Grid container justifyContent={"space-between"}>
                    <Typography variant="body2">
                      ₹15,000 - ₹30,000 monthly
                    </Typography>
                    <Typography variant="body2">Sector 3, Noida</Typography>
                  </Grid>
                  <Paper
                    sx={{ backgroundColor: "#f4f4f4", p: 2 }}
                    elevation={0}
                  >
                    <Grid container spacing={1}>
                      <Chip
                        icon={<WorkHistoryIcon />}
                        label="3 - 7 years"
                        size="small"
                        variant="outlined"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        icon={<ApartmentIcon />}
                        label="Work From Home"
                        size="small"
                        variant="outlined"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        icon={<LocationOnIcon />}
                        label="Noida"
                        size="small"
                        variant="outlined"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        icon={<AccessTimeIcon />}
                        label="Full Time"
                        size="small"
                        variant="outlined"
                      />
                    </Grid>
                  </Paper>
                  <Grid container justifyContent={"space-between"} mt={2}>
                    <Typography variant="body2">
                      <b>Posted:</b> 01/01/2025
                    </Typography>
                    <Typography variant="body2">
                      <b>Openings:</b> 1
                    </Typography>
                    <Grid>
                      <Button variant="text" color="info">
                        Share
                      </Button>
                      <Button
                        variant="contained"
                        color={applied ? "success" : "info"}
                        onClick={handleApply}
                        disabled={loading || applied}
                        sx={{
                          minWidth: "120px",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {loading ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : applied ? (
                          "Job Applied"
                        ) : (
                          "Apply Now"
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Job Highlights (Below Job Card) */}
            <Grid size={{ xs: 12 }}>
              <div className="card shadow-lg card-border-top border-primary">
                <div className="card-body">
                  <Typography variant="h6">Job Highlights</Typography>
                  <Typography variant="body2">
                    - Competitive salary <br />
                    - Flexible work hours <br />
                    - Health benefits <br />- Growth opportunities
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column (Similar Jobs) - Hidden on xs */}
        <Grid
          size={{ xs: 12, sm: 3, md: 3 }}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">
                Jobs you might be interested in
              </Typography>
              <Typography variant="body2">Software Developer</Typography>
              <Typography variant="body2">Data Analyst</Typography>
              <Typography variant="body2">UI/UX Designer</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Jobdetails;
