import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Stack,
  Divider,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import BusinessIcon from "@mui/icons-material/Business"; // Icon for company
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Location Icon
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee"; // Salary Icon
import WorkIcon from "@mui/icons-material/Work"; // Experience Icon
import HomeWorkIcon from "@mui/icons-material/HomeWork"; // Work from Home Icon

function JobCard() {
  const Jobdescription =
    "As a Webflow Developer, you will be responsible for creating responsive, scalable, and high-performing websites, ensuring they align with our brand and business goals. Youll collaborate with the design team";

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardActionArea>
        {/* Job Title & Company Header */}
        <CardContent>
          <Grid container spacing={1}>
            <Grid size={{ xs: 12 }}>
              <Grid container justifyContent={"space-between"}>
                <Grid>
                  <Typography variant="h6">Front-end Engineer</Typography>
                  <Typography variant="body2">
                    HN Cyberspace Media Pvt. Ltd.
                  </Typography>
                </Grid>
                <Grid>
                  <Avatar />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12 }}>
              {/* Experience, Salary, Location */}
              <Grid container>
                <Grid size={{ xs: 3 }}>
                  <Typography variant="body2">
                    <WorkIcon
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 0.5 }}
                    />
                    Exp 2-4 yrs
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3 }}>
                  <Typography variant="body2">
                    <CurrencyRupeeIcon
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 0.5 }}
                    />
                    2 - 3 LPA
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3 }}>
                  <Typography variant="body2">
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 0.5 }}
                    />
                    New Delhi
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12 }} mt={1}>
              {/* Job Description */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {Jobdescription.slice(0, 85)}...
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              {/* Required Skills */}
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                {/* {job.skills.map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" size="small" />
          ))} */}
                <Typography variant="caption" sx={{ color: "#888888" }}>
                  React JS
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography variant="caption" sx={{ color: "#888888" }}>
                  HTML
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography variant="caption" sx={{ color: "#888888" }}>
                  CSS
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography variant="caption" sx={{ color: "#888888" }}>
                  Typescript TS
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Grid>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                    <Chip
                      label="Work From Home"
                      icon={<HomeWorkIcon fontSize="inherit" />} // Makes icon smaller
                      variant="outlined"
                      size="small"
                      sx={{
                        fontSize: "0.7rem", // Reduce text size
                        height: "20px", // Adjust chip height
                        padding: "0 4px", // Reduce padding
                        "& .MuiChip-icon": {
                          fontSize: "0.9rem", // Make icon slightly smaller
                        },
                      }}
                    />

                    <Chip
                      label="Full time"
                      icon={<BusinessIcon fontSize="small" />}
                      variant="outlined"
                      size="small"
                      sx={{
                        fontSize: "0.7rem", // Reduce text size
                        height: "20px", // Adjust chip height
                        padding: "0 4px", // Reduce padding
                        "& .MuiChip-icon": {
                          fontSize: "0.9rem", // Make icon slightly smaller
                        },
                      }}
                    />
                    <Chip
                      label="Posted: 3 Days ago"
                      variant="outlined"
                      size="small"
                      sx={{
                        fontSize: "0.7rem", // Reduce text size
                        height: "20px", // Adjust chip height
                        padding: "0 4px", // Reduce padding
                        "& .MuiChip-icon": {
                          fontSize: "0.9rem", // Make icon slightly smaller
                        },
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
              {/* Job Requirements */}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;
