import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER, SET_NEW_USER } from '../reducers/expenseSlice';


const UserCreator = props => {
  const dispatch = useDispatch();
  const newUser= useSelector(state => state.expense.newUser);


  return (
    <div className='userCreator'>
      <label>Name: <input type="text" value={newUser}
        onChange={event=>{dispatch(SET_NEW_USER(event.target.value))}} />   
      </label>
      <button type="submit" 
      onClick={() => dispatch(ADD_USER(newUser))}>
        Add User</button>
    </div> 
  );  
};

export default UserCreator;

const ExpenseCreator = props => {

  return (
    <div className='expenseCreator'>
      <label>Exepnse:
        <input type="text" value={newExpense}
        onChange={event=>{dispatch(SET_NEW_EXPENSE(event.target.value))}} />
      </label>
      <button type="submit" 
        onClick={() => dispatch(ADD_EXPENSE(newExpense))}>
        Add Expense
      </button>
    </div> 
  );  
};