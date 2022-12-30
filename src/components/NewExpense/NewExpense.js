import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = function (props) {
  const [formIsShowing, setFormIsShowing] = useState(false);

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random() };
    props.onAddExpense(expenseData);
  };

  const showFormHandler = function () {
    setFormIsShowing(true);
  };

  const hideFormHandler = function () {
    setFormIsShowing(false);
  };

  return (
    <div className="new-expense">
      {!formIsShowing && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {formIsShowing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideFormHandler={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
