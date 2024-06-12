import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_EXPENSE, SET_NEW_EXPENSE } from '../reducers/expenseSlice';

const ExpenseCreator = props => {
  const dispatch = useDispatch();
  const newExpense = useSelector(state => state.expense.newExpense);

  return (
    <div className='expenseCreator'>
      <label>Exepnse: <input type="text" value={newExpense}
        onChange={event=>{dispatch(SET_NEW_EXPENSE(event.target.value))}} />
      </label>
      <button type="submit" 
        onClick={() => dispatch(ADD_EXPENSE(newExpense))}>
        Add Expense
      </button>
    </div> 
  );  
};

export default ExpenseCreator;