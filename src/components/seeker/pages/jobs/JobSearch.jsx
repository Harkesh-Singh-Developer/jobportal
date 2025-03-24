import React from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
function JobSearch() {
  return (
    <>
      <Grid container justifyContent={"center"} mt={2}>
        <Grid size={{ xs: 10 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f4f4f4",
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
                sx={{
                  width: "25%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none", // Removes border
                    },
                    "&:hover fieldset": {
                      border: "none", // Removes hover border
                    },
                    "&.Mui-focused fieldset": {
                      border: "none", // Removes focus border
                    },
                  },
                }}
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
                sx={{
                  width: "25%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none", // Removes border
                    },
                    "&:hover fieldset": {
                      border: "none", // Removes hover border
                    },
                    "&.Mui-focused fieldset": {
                      border: "none", // Removes focus border
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkHistoryIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                size="small"
                placeholder="Job Location"
                sx={{
                  width: "25%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none", // Removes border
                    },
                    "&:hover fieldset": {
                      border: "none", // Removes hover border
                    },
                    "&.Mui-focused fieldset": {
                      border: "none", // Removes focus border
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PlaceIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Button variant="contained" color="primary">
                Search Job
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ mb: 1, mt: 1 }} />
    </>
  );
}

export default JobSearch;
