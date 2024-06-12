import React from 'react';
import User from './User.jsx';

const UserDisplay = props => {

  return(
    <div className="userDisplay">
      <h4>User</h4>
      <User/>
    </div>
  );
};

export default UserDisplay;