import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./snackbarStyles";

export default function SnackBar({ open, setOpen }) {
  const classes = useStyles();

  const handleOnClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleOnClose}
      >
        <MuiAlert
          onClose={handleOnClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction Successfully Created !!
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
