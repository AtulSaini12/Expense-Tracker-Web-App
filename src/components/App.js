import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles/appStyles";

import Details from "./Details/Details";
import Main from "./Main/Main";

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={4} classname={classes.main}>
          <Main />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}
