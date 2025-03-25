import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { CameraAlt, Edit } from "@mui/icons-material";
import JobSearch from "./jobs/JobSearch";

function Profile() {
  const [hover, setHover] = useState(false);

  return (
    <Grid container spacing={2} justifyContent="center">
      {/* Job Search Section */}
      <Grid size={{ xs: 12 }}>
        <JobSearch />
      </Grid>

      {/* Profile Card Section */}
      <Grid size={{ xs: 12, sm: 10, md: 8 }}>
        <Card
          sx={{
            borderLeft: "5px solid #1976d2",
            p: 2,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Grid container alignItems="center" spacing={3}>
              {/* Profile Picture with Hover Upload */}
              <Grid size={{ xs: 12, sm: 3 }} textAlign="center">
                <Box
                  sx={{
                    position: "relative",
                    width: 100,
                    height: 100,
                    mx: "auto",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #1976d2",
                    "&:hover .upload-icon": { opacity: 1 },
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Avatar
                    src="https://via.placeholder.com/100"
                    sx={{ width: 100, height: 100 }}
                  />
                  {hover && (
                    <Tooltip title="Upload New">
                      <IconButton
                        className="upload-icon"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          color: "white",
                          opacity: 0,
                          transition: "0.3s",
                          width: "100%",
                        }}
                      >
                        <CameraAlt />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
              </Grid>

              {/* Name, Designation, and Company */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="h6" fontWeight="bold">
                  Harkesh Singh Chauhan
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Software Engineer @ HNC
                </Typography>
              </Grid>

              {/* Edit Button */}
              <Grid size={{ xs: 12, sm: 3 }} textAlign="right">
                <Tooltip title="Edit Profile">
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>

            {/* Additional Information */}
            <Grid container spacing={2} mt={2}>
              {[
                { label: "Location", value: "Gurugram, INDIA" },
                { label: "Experience", value: "4 Years" },
                { label: "Salary", value: "₹ 24,00,000" },
                { label: "Phone", value: "8447736877" },
                { label: "Email", value: "harkesh.sain@gmail.com" },
                { label: "Notice Period", value: "1 Month" },
              ].map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 4 }}>
                  <Typography variant="body2" fontWeight="bold" color="primary">
                    {item.label}
                  </Typography>
                  <Typography variant="body2">{item.value}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Profile;
