import "./ExpenseItem.css";

import React, {useState} from 'react'

import ExpenseDate from './ExpenseDate'

import ExpenseDetails from './ExpenseDetails'

import Card from '../UI/Card'

const ExpenseItem = (props) => {
    // const [title,setTitle] = useState(props.title)
    const [amount,setAmount] = useState(props.amount)
  const clickFunction = () =>{
    // setTitle('Updated!!!')
    setAmount(100)
    console.log(amount)
  }
  return (
    <Card className="expense-item">
     <ExpenseDate  date={props.date}/>
     <ExpenseDetails title={props.title} location={props.location} amount={amount}/>
     <button onClick ={clickFunction}>Click Me</button>
    </Card>
  );
}

export default ExpenseItem;