import React from 'react';

const User = (props) => {

  return (
    <div className="user" id={props.id}>
        <span>{props.user}</span>
        <span>average: {props.cost}</span>
    </div>
  );
}

export default User;