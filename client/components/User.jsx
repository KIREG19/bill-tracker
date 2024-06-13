import React from 'react';
import { useDispatch } from 'react-redux';
import { COUNT_USER } from '../reducers/expenseSlice';

const User = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="user" id={props.id + 1}>{props.id + 1}
        <button className='button' type="submit" 
      onClick={() => dispatch(COUNT_USER(props.user))}>{props.user}</button>
        <span>average: {props.cost}</span>
    </div>
  );
}

export default User;