import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  totalExpense: 0,
  expenseList: [],
  newUser: '',
  newExpense: '',
}

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers:{

    ADD_USER: (state, action) => {
      state.userList.push(action.payload)
      state.newUser = ''
    },

    SET_NEW_USER: (state, action) => {
      state.newUser = action.payload
    },

    ADD_EXPENSE: (state, action) => {
      let num = parseFloat(Number(action.payload).toFixed(2))
      if(num !== 0 && !isNaN(num)){
        state.expenseList.push(num);
        state.totalExpense += num;
        // state.user = '';
        state.newExpense = '';
        console.log('expenseList', [...state.expenseList])
        console.log('totalExpense', state.totalExpense)
      }
    },

    SET_NEW_EXPENSE: (state, action) => {
      state.newExpense = action.payload
    },

    RESET: (state, action) => {
      state.expenseList = [];
      state.totalExpense = 0;
    },
  }

})

export const { ADD_USER, SET_NEW_USER, ADD_EXPENSE, SET_NEW_EXPENSE, RESET } = expenseSlice.actions;

export default expenseSlice.reducer;