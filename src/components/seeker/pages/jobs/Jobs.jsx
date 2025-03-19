import React, { useContext } from "react";
import AuthContext from "../../../context/Auth";
import AppBarComponent from "../../AppbarComponent";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Divider,
  Paper,
  TextField,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
function Jobs() {
  const { user, logout } = useContext(AuthContext);
  return (
    <React.Fragment>
      <AppBarComponent logout={logout} uid={user?.uid || "Not Logged In"} />

      <Grid container spacing={1} mt={2}>
        <Grid size={{ xs: 12 }}>
          <Grid container justifyContent={"center"}>
            <Grid size={{ xs: 10 }}>
              <Paper
                variant="outlined"
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#e9e9e9",
                  borderRadius: "40px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <TextField
                    placeholder="Search jobs by company"
                    size="small"
                    sx={{ width: "25%" }}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  <TextField
                    size="small"
                    placeholder="Experience"
                    sx={{ width: "25%" }}
                  />
                  <TextField
                    size="small"
                    placeholder="Job Location"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PlaceIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{ width: "25%" }}
                  />
                  <Button variant="contained" color="primary">
                    Search Job
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          size={{ xs: 12 }}
          minHeight={"100vh"}
          sx={{ backgroundColor: "#f2f2f2" }}
        >
          <Grid container justifyContent={"center"} spacing={1} mt={1}>
            <Grid size={{ xs: 10 }}>
              <Typography variant="h6">
                Showing 379 jobs based on your profile
              </Typography>
            </Grid>
            <Grid size={{ xs: 3, sm: 3, md: 3 }}>
              <Paper
                elevation={2}
                variant="elevation"
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  height: "100px",
                }}
              >
                Filters
              </Paper>
            </Grid>
            <Grid size={{ xs: 4, sm: 4, md: 4 }}>
              <Paper
                elevation={2}
                variant="elevation"
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  height: "100px",
                }}
              >
                Jobs List
              </Paper>
            </Grid>
            <Grid size={{ xs: 3, sm: 3, md: 3 }}>
              <Paper
                elevation={2}
                variant="elevation"
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  height: "100px",
                }}
              >
                Profile
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Jobs;
