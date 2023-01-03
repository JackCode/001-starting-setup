import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = function (props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangedHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const expensesFilteredByYear = props.expenses.filter(
    (expense) => expense.date.getFullYear() + '' === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={expensesFilteredByYear} />
      <ExpensesList items={expensesFilteredByYear} />
    </Card>
  );
};

export default Expenses;
