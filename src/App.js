import Expenses from './components/Expenses/Expenses'

import NewExpense from './components/newExpense/NewExpense'

const App = () => {
  const expenseArray = [
    {
      title: "My Sneakers",
      date: new Date(2022, 9, 12),
      amount: 5000,
      location: "Pune",
    },
    {
      title: "Hoody",
      date: new Date(2022, 6, 9),
      amount: 2500,
      location: "Bangalore",
    },
    {
      title: "Pizza",
      date: new Date(2022, 8, 12),
      amount: 500,
      location: "Mumbai",
    },
    {
      title: "Clubbing",
      date: new Date(2022, 11, 31),
      amount: 10000,
      location: "Canberra",
    },
  ];

  const myDataHandler = (expense) => {
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onSaveFinalData={myDataHandler}/>
      <Expenses items={expenseArray} />
   </div>
  );
}

export default App;
