import React from 'react';

const User = (props) => {

  return (
    <div className="user" id={props.id + 1}>{props.id + 1}
        <button className='button' onClick=''>{props.user}</button>
        <span>average: {props.cost}</span>
    </div>
  );
}

export default User;