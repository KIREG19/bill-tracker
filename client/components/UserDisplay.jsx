import React from 'react';
import User from './User.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { RESET_USER } from '../reducers/expenseSlice';

const UserDisplay = props => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.expense.userList);

  return(
    <div className="userDisplay">
      <h3>User </h3>
      {Object.keys(userList) && Object.keys(userList).map((el, i) => <User key={i} id={i} user={el} cost={userList[el]}/>)}
      <div className='userReset'>
        <button className='reset' type='submit' onClick={()=> dispatch(RESET_USER())}>RESET</button>
      </div>
    </div>
  );
};

export default UserDisplay;