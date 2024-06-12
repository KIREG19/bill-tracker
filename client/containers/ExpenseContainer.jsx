import React from 'react';
import ExpenseCreator from '../components/ExpenseCreator.jsx';
import ExpenseDisplay from '../components/ExpenseDisplay.jsx';

const ExpenseContainer = (props) => {

  return(
    <div className='expenseContainer'>
      <ExpenseCreator/>
      <ExpenseDisplay/>
    </div>
  )
}

export default ExpenseContainer;