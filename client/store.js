import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducers/expenseSlice.js';

const store = configureStore({
  reducer: {
    expense: expenseReducer
    // if we had other reducers, they would go here
  },
});

export default store;