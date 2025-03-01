

        {/*  Snackbar for Network Status in TOP-RIGHT Corner */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000} // 5 seconds
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // ✅ Changed position
        >
          <Alert
            variant="filled"
            onClose={() => setOpenSnackbar(false)}
            severity={networkStatus ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </React.StrictMode>