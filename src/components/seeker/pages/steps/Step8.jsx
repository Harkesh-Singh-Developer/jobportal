import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  LinearProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";

// Styled Progress Bar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Step8({ formData, setFormData, onBack, onNext }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // File Selection Handler
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileSizeMB = file.size / (1024 * 1024);
    const fileExtension = file.name.split(".").pop().toLowerCase();
    const allowedExtensions = ["pdf", "doc", "docx"];

    if (!allowedExtensions.includes(fileExtension)) {
      setError("Only PDF, DOC, or DOCX files are allowed.");
      setSelectedFile(null);
      return;
    }

    if (fileSizeMB > 10) {
      setError("File size should not exceed 10MB.");
      setSelectedFile(null);
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  // Upload Simulation
  const handleUpload = () => {
    if (!selectedFile) {
      setError("Please select a valid file before proceeding.");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    const fakeUpload = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fakeUpload);
          setTimeout(() => {
            setUploading(false);
            onNext(formData); // Move to next step after upload
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <Paper variant="outlined" sx={{ p: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ whiteSpace: "nowrap", mr: 2 }}>
          Upload Resume
        </Typography>
        <BorderLinearProgress
          variant="determinate"
          value={100}
          sx={{ flexGrow: 1, height: 2 }}
        />
      </Box>
      <Divider sx={{ mb: 2 }} />

      {/* Centering Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "40vh",
        }}
      >
        <Typography variant="subtitle2" mb={1}>
          Upload your resume.
        </Typography>
        <Typography variant="caption" color="initial">
          Takes less than a minute
        </Typography>

        {/* Upload Button */}
        <Button
          component="label"
          role={undefined}
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ mt: 2 }}
        >
          Upload
          <VisuallyHiddenInput
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </Button>

        {/* Display selected file */}
        {selectedFile && (
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              {selectedFile.name} (
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
            </Typography>
          </Box>
        )}

        {/* Error message */}
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </Box>

      {/* Progress Bar */}
      {uploading && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <BorderLinearProgress variant="determinate" value={uploadProgress} />
          <Typography
            variant="caption"
            sx={{ display: "block", textAlign: "center", mt: 1 }}
          >
            Uploading... {uploadProgress}%
          </Typography>
        </Box>
      )}

      {/* Next Button */}
      <Grid container justifyContent="center" sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
          >
            {uploading ? "Uploading..." : "Next"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Step8;
