import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER, SET_NEW_USER } from '../reducers/expenseSlice';


const UserCreator = props => {
  const dispatch = useDispatch();
  const newUser= useSelector(state => state.expense.newUser);


  return (
    <div className='userCreator'>
      <label >Name: <input type="text" value={newUser}
        onChange={event=>{dispatch(SET_NEW_USER(event.target.value))}} />   
      </label>
      <button className='add' type="submit" 
      onClick={() => dispatch(ADD_USER(newUser))}>
        Add</button>
    </div> 
  );  
};

export default UserCreator;