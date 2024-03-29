import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";

import useStyles from "./styles";

export default function Details({ title }) {
  const classes = useStyles();

  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">₹{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
}
