import './ExpenseForm.css'

import React, {useState} from 'react'

const ExpenseForm = () => {

 const [EnteredTitle,setEnteredTitle] = useState('')
 const [EnteredAmount,setEnteredAmount] = useState('')
 const [EnteredDate,setEnteredDate] = useState('')
  const titleHandler = (event) =>{
    setEnteredTitle(event.target.value)
    console.log(EnteredTitle)
  }

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value)
    console.log(EnteredAmount)
  }

  const dateHandler = (event) => {
 setEnteredDate(event.target.value)
 console.log(EnteredDate)
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' onChange={amountHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2022-12-31' onChange={dateHandler}/>
        </div>
        <div className='new-expense__actions'>
            <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
