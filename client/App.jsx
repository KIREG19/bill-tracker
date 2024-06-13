import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import './styles.scss';

const App = () => {
  return(
    <div className="app">
      <h1>Bill Tracker</h1>
        <div>
          <ol> Rules:
            <li> no user selected and no payer, only add to the total expense </li>
            <li> no user selected and has a payer, caculate for all </li>
            <li> user selected and payer exist, it will calulate for selected user </li>
            <li> user selected and payer is not exist, won't calulate </li>
          </ol>
        </div>
      <MainContainer/>
    </div>
  )
}

export default App;