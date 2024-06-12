import React from 'react';
import UserContainer from './UserContainer.jsx';
import ExpenseContainer from './ExpenseContainer.jsx';


const MainContainer = (props) => {

  return(
    <div className="mainContainer"> 
          <UserContainer/>
          <ExpenseContainer/>
    </div>
  );
}

export default MainContainer;