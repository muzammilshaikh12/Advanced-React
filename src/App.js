import Expenses from './components/Expenses/Expenses'

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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenseArray} />
   </div>
  );
}

export default App;
