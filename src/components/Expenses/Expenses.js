import ExpenseList from "./ExpenseList";

import "./Expenses.css";

import Card from "../UI/Card";

import React, {useState} from 'react'

import ExpenseFilter from "./ExpenseFilter";

const Expenses = (expenseArray) => {
  const [FilteredYear, setFilteredYear] = useState('2019')
  const FilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  const filteredExpenses = expenseArray.items.filter(expense => {
    return expense.date.getFullYear().toString() === FilteredYear
  })

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onFilterChange={FilterHandler} />
        <ExpenseList items={filteredExpenses}/>
        </Card>
    </div>
  );
};

export default Expenses;
