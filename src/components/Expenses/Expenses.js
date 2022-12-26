import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = function (props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
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
