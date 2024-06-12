import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


// |-- App
//    |-- MainContainer
//        |-- UserContainer
//            |-- UserCreator -> add user
//            |-- UserDisplay -> display user and avg expense
//        |-- ExpenseContainer
//            |-- ExpnenseCreator -> add payer and expense
//            |—- ExpenseDisplay
//               |—- Expense  -> display expense