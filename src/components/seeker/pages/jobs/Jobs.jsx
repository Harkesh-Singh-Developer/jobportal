import React, { useContext } from "react";
import { encryptUrlParams, decryptUrlParams } from "../../../config/Config";
import AuthContext from "../../../context/Auth";
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
import Profilecard from "./cardcomponents/Profilecard";
import Jobcard from "./cardcomponents/Jobcard";
import Aiinterview from "./cardcomponents/Aiinterview";
function Jobs() {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
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
        <Grid size={{ xs: 12 }} sx={{ backgroundColor: "#f5f5f5" }}>
          <Grid container justifyContent={"center"} spacing={1} mt={1}>
            <Grid size={{ xs: 12 }}>
              <Grid container justifyContent={"center"}>
                <Grid size={{ xs: 10 }}>
                  <Typography variant="h6">
                    Showing 379 jobs based on your profile
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 2, md: 2 }}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
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
            <Grid size={{ xs: 11, sm: 6, md: 6 }}>
              <Grid container spacing={1}>
                <Grid>
                  <Jobcard jobId={encryptUrlParams("1234")} />
                </Grid>
                <Grid>
                  <Jobcard jobId={encryptUrlParams("456")} />
                </Grid>
                <Grid>
                  <Jobcard jobId={encryptUrlParams("7891")} />
                </Grid>
                <Grid>
                  <Jobcard jobId={encryptUrlParams("1112")} />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 2, md: 2 }}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {/* Right Side View */}
              <Grid
                container
                justifyContent={"center"}
                sx={{ border: "1px solid #dedede", borderRadius: "10px" }}
                spacing={1}
              >
                <Grid size={{ xs: 11 }}>
                  {/* Profile Card */}
                  <Profilecard uid={user?.uid} />
                  {/* Profile Card */}
                </Grid>
                <Grid size={{ xs: 11 }}>
                  {/* Ai Card */}
                  <Aiinterview />
                  {/* Ai Card */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Jobs;
