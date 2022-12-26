import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = function (props) {
  const yearSelectedDataHandler = function (year) {
    console.log("In Expenses.js");
    console.log(year);
  };

  return (
    <div>
      <ExpensesFilter onYearSelected={yearSelectedDataHandler} />
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
    </div>
  );
};

export default Expenses;
