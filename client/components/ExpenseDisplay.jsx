import React from 'react';
import Expense from './Expense.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { RESET } from '../reducers/expenseSlice';

const ExpenseDisplay = props => {
  const dispatch = useDispatch();
  const expenseList = useSelector(state => state.expense.expenseList);
  const totalExpense = useSelector(state => state.expense.totalExpense);
  const countUser = useSelector(state => state.expense.countUser)

  return (
    <div className='expenseDisplay'>
        <div className='member'>
          member: {countUser && countUser.map((el, i) => <span key={i}>{el}</span>)}
        </div>
      <h3>Expense</h3>
      <div className='totalExpense'>Total Expense : {totalExpense}
        <button className='reset' type='submit' onClick={()=> dispatch(RESET())}>RESET</button>
      </div>
      {expenseList && expenseList.map((el, i) => <Expense key={i} id={i} expense={el}/>)}
    </div>
   
  );
};

export default ExpenseDisplay;