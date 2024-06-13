import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_EXPENSE, SET_NEW_EXPENSE, SET_PAYER } from '../reducers/expenseSlice';

const ExpenseCreator = props => {
  const dispatch = useDispatch();
  const newExpense = useSelector(state => state.expense.newExpense);
  const payer = useSelector(state => state.expense.payer)

  return (
    <div className='expenseCreator'>
      <input id='payer' type="text" value ={payer} placeholder='Payer'
        onChange={event=>{dispatch(SET_PAYER(event.target.value))}}/>
      <label>pay<input type="text" value={newExpense} placeholder='amount'
        onChange={event=>{dispatch(SET_NEW_EXPENSE(event.target.value))}} />
      </label>
      <button className='add' type="submit" 
        onClick={() => dispatch(ADD_EXPENSE(newExpense))}>
        Add Expense
      </button>
    </div> 
  );  
};

export default ExpenseCreator;