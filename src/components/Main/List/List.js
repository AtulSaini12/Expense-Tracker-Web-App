import React from "react";
import {
  List as MList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  Slide,
  IconButton,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./listStyles";

export default function List() {
  const classes = useStyles();

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 100,
      date: "Wed Dec 16",
    },
    {
      id: 2,
      type: "Expense",
      category: "Shoes",
      amount: 300,
      date: "Wed Dec 19",
    },
    {
      id: 1,
      type: "Income",
      category: "Freelance",
      amount: 10,
      date: "Wed Dec 10",
    },
  ];

  return (
    <MList dense={false} className={classes.list}>
      {transactions.map((transaction) => {
        return (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    transaction.type === "Income"
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`$ ${transaction.amount} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick="">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        );
      })}
    </MList>
  );
}
