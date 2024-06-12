import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import './styles.scss';

const App = () => {
  return(
    <div className="app">
      <h1>Bill Divider</h1>
      <MainContainer/>
    </div>
  )
}

export default App;