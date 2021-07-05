import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { useContext } from "react";

import useStyles from "./mainStyles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../Context/Context";
import InfoCard from "../InfoCard";

export default function Main() {
  const { balance } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by React" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance : {balance >= 0 ? `₹${balance}` : `- ₹${balance * -1}`}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
