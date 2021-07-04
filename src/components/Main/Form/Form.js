import React, { useState, useContext } from "react";

import { v4 as uuidv4 } from "uuid";

import {
  Typography,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { ExpenseTrackerContext } from "../../../Context/Context";
import useStyles from "./formStyles";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/Categories";
import formatDate from "../../../utils/formatDate";

const initialFormState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

export default function Form() {
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialFormState);
  const classes = useStyles();

  const handleOnClick = () => {
    if (
      formData.amount === "" ||
      formData.category === "" ||
      formData.type === ""
    ) {
      return alert("Please enter all the details !!");
    }

    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      date: formatDate(formData.date),
      id: uuidv4(),
    };
    addTransaction(transaction);
  };

  const showCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            .....
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  type: e.target.value,
                });
              }}
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  category: e.target.value,
                });
              }}
            >
              {showCategories.map((category) => {
                return (
                  <MenuItem key={category.type} value={category.type}>
                    {category.type}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            type="number"
            label="Amount"
            fullWidth
            value={formData.amount}
            onChange={(e) => {
              setFormData({
                ...formData,
                amount: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Date"
            fullWidth
            value={formData.date}
            onChange={(e) => {
              setFormData({
                ...formData,
                date: e.target.value,
              });
            }}
          />
        </Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={handleOnClick}
        >
          Create
        </Button>
      </Grid>
    </div>
  );
}
