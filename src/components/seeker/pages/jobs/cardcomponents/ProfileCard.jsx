import React, { useEffect, useState } from "react";
import { Avatar, Button, Paper, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import api from "../../../../config/Config";
function ProfileCard({ uid }) {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    const basicInfo = async () => {
      if (!uid) return;
      try {
        const data = {
          uid,
        };
        const response = await api.post("/seeker-basic-data", data);
        console.log(response.data);
        if (response.data?.status) {
          setLoading(false);
          setProfileData(response.data.data);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    basicInfo();
  }, [uid]);

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        p: 1,
        display: "flex",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid>
          {loading ? (
            <Skeleton variant="circular" height={56} width={56}></Skeleton>
          ) : (
            <Avatar
              alt={profileData.fullName}
              src={profileData.photo}
              sx={{
                border: "1px solid #e4e4e4",
                backgroundColor: "#559199",
                width: 56,
                height: 56,
              }}
            >
              HS
            </Avatar>
          )}
        </Grid>
        <Grid>
          {loading ? (
            <Skeleton variant="text" width={100}></Skeleton>
          ) : (
            <Typography variant="body1">{profileData.fullName}</Typography>
          )}
        </Grid>
        <Grid>
          <Button variant="outlined" color="primary" size="small" fullWidth>
            Update Profile
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProfileCard;
