import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";
import AppBarComponent from "../../AppbarComponent";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

function Jobs() {
  const { user, logout } = useContext(AuthContext);
  return (
    <React.Fragment>
      <AppBarComponent logout={logout} uid={user?.uid || "Not Logged In"} />

      {/* Main Container */}
      <Grid container spacing={2} sx={{ p: 2 }}>
        {/* Centered Job Search Bar */}
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                bgcolor: "lightblue",
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              Job Search Bar
            </Box>
          </Grid>
        </Grid>

        {/* Job Page Layout */}
        <Grid container spacing={2} justifyContent="space-evenly" mt={2}>
          {/* Left Section - Job Filters */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ bgcolor: "lightgray", p: 2 }}>Job Filters</Box>
          </Grid>

          {/* Middle Section - Job List */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ bgcolor: "white", p: 2, border: "1px solid gray" }}>
              Job List
            </Box>
          </Grid>

          {/* Right Section - Profile Details */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ bgcolor: "lightgreen", p: 2 }}>Profile Details</Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Jobs;
