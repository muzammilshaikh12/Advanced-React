import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";

const Expenses = (expenseArray) => {
  console.log(expenseArray);
  const FilterHandler = (props) => {
    console.log(props);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onFilterChange={FilterHandler} />
        {expenseArray.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
        </Card>
    </div>
  );
};

export default Expenses;
