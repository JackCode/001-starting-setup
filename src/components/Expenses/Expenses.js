import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = function (props) {
  return (
    <Card className="expenses">
      {props.expenses.map((exp, i) => (
        <ExpenseItem
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
          key={i}
        />
      ))}
    </Card>
  );
};

export default Expenses;
