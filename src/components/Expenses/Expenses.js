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

  const expensesFilteredByYear = props.expenses.filter(
    (expense) => expense.date.getFullYear() + "" === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (expensesFilteredByYear.length > 0) {
    expensesContent = expensesFilteredByYear.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
