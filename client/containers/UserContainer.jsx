import React from 'react';
import UserCreator from '../components/UserCreator.jsx';
import UserDisplay from '../components/UserDisplay.jsx';

const UserContainer = (props) => {

  return(
    <div className='userContainer'>
      <UserCreator/>
      <UserDisplay/>
    </div>
  )
}

export default UserContainer;