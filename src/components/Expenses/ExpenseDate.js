import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = function (props) {
  const locale = navigator.language;
  const month = props.date.toLocaleString(locale, { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString(locale, { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
