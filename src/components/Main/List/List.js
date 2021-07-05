import React, { useContext } from "react";
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

import { ExpenseTrackerContext } from "../../../Context/Context";
import useStyles from "./listStyles";

export default function List() {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  const classes = useStyles();

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
                secondary={`₹ ${transaction.amount} : ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    deleteTransaction(transaction.id);
                  }}
                >
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
