import ExpenseItem from "./ExpenseItem";

import './Expenses.css'

import Card from '../UI/Card'

import ExpenseFilter from './ExpenseFilter'

const Expenses = (expenseArray) => {
  const FilterHandler = (props) => {
    console.log(props)
  }
  return (
    <div>
     <Card className="expenses">
      <ExpenseFilter onFilterChange = {FilterHandler}/>
      <ExpenseItem
        title={expenseArray.items[0].title}
        amount={expenseArray.items[0].amount}
        date={expenseArray.items[0].date}
        location={expenseArray.items[0].location}
      />
      <ExpenseItem
        title={expenseArray.items[1].title}
        amount={expenseArray.items[1].amount}
        date={expenseArray.items[1].date}
        location={expenseArray.items[1].location}
      />
      <ExpenseItem
        title={expenseArray.items[2].title}
        amount={expenseArray.items[2].amount}
        date={expenseArray.items[2].date}
        location={expenseArray.items[2].location}
      />
      <ExpenseItem
        title={expenseArray.items[3].title}
        amount={expenseArray.items[3].amount}
        date={expenseArray.items[3].date}
        location={expenseArray.items[3].location}
      />
    </Card>
    </div>
  );
}

export default Expenses;
