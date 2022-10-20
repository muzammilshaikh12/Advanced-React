import React from 'react'

import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) =>  {
    const expenseDataHandler = (NewExpenseData) => {
       const newData = {
        ...NewExpenseData
       }

    //    console.log(newData)
       props.onSaveFinalData(newData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
    </div>
}

export default NewExpense