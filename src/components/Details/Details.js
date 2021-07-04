import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";

export default function Details({ title }) {
  const classes = useStyles();

  return (
    <Card className={title === "income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data="DATA" /> */}
      </CardContent>
    </Card>
  );
}
