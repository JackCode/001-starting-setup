import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//  Custom made components must start with upper-case char
const ExpenseItem = (props) => {
  //  const expenseDate = new Date(2021, 2, 28); // Vanilla JS.
  //  const expenseTitle = "Car Insurance";
  //  const expenseAmount = 294.67;
  //  Now getting data from props

  // const locale = navigator.language;
  // const month = props.date.toLocaleString(locale, { month: "long" });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString(locale, { day: "2-digit" });
  // Moved to ExpenseDate component

  // const [title, setTitle] = useState(props.title);
  // AirBNB styling guide says to close over with arrow function
  // const clickHandler = () => {
  //   setTitle("**New Title**");
  //   console.log(title);
  // };

  //  Must return JSX with one root element (easiest to use div)
  //  Notice use of "className" instead of "class" in JSX
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={() => setTitle("**New Title**")}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
