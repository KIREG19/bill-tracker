import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: {},
  totalExpense: 0,
  expenseList: [],
  newUser: '',
  newExpense: '',
  countUser: [],
}

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers:{

    ADD_USER: (state, action) => {
      if(!state.userList[action.payload] && action.payload.trim() !== ''){
        state.userList[action.payload] = 0
        state.newUser = ''
      }
    },

    SET_NEW_USER: (state, action) => {
      state.newUser = action.payload
    },

    RESET_USER: (state, action) => {
      state.userList = {}
    },

    ADD_EXPENSE: (state, action) => {
      let num = parseFloat(Number(action.payload).toFixed(2))
      if(num !== 0 && !isNaN(num)){
        state.expenseList.push(num);
        state.totalExpense += num;
        state.newExpense = '';
      }
      let avg = num / (Object.keys(state.userList).length)
      avg = parseFloat(Number(avg).toFixed(2))
      Object.keys(state.userList).map(el => state.userList[el] += avg)
    },

    SET_NEW_EXPENSE: (state, action) => {
      state.newExpense = action.payload
    },

    RESET: (state, action) => {
      state.expenseList = [];
      state.totalExpense = 0;
    },

    COUNT_USER: (state, action) => {
      state.countUser.push(action.payload)
    }
  }

})

export const { ADD_USER, SET_NEW_USER, ADD_EXPENSE, SET_NEW_EXPENSE, RESET, RESET_USER } = expenseSlice.actions;

export default expenseSlice.reducer;