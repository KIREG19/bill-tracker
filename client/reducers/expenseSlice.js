import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: {},
  totalExpense: 0,
  expenseList: [],
  newUser: '',
  newExpense: '',
  countUser: [],
  payer: '',
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
      state.countUser = [];
    },

    ADD_EXPENSE: (state, action) => {
      let num = parseFloat(Number(action.payload).toFixed(2))
      const payer = state.payer.trim()
      //1.no user select and no payer, it only add to the total expense ✔️
      //2.no user select and has a payer, caculate for all ✔️
      //3.if there is user selected and payer exist, it will calulate the selected user ✔️
      //4.if there is user selected and payer is not includes, wont calulate ✔️
      //5.payer and member can not count twice ✔️
      if(num !== 0 && !isNaN(num) && !state.countUser.length && payer == ''){
        state.expenseList.push(num);
        state.totalExpense += num;
        state.newExpense = '';
      }
      else if(num !== 0 && !isNaN(num) && !state.countUser.length && Object.keys(state.userList).includes(payer)){
        let avg = num / (Object.keys(state.userList).length)
        avg = parseFloat(Number(avg).toFixed(2))
        Object.keys(state.userList).map(el => {
          if(payer === el){
            state.userList[el] -= avg * (Object.keys(state.userList).length - 1)
          }
          else state.userList[el] += avg
        })
        state.expenseList.push(num);
        state.totalExpense += num;
        state.newExpense = '';
        state.payer = '';
      }
      //3.if there is user selected and payer exist, it will calulate the selected user
      else if(num !== 0 && !isNaN(num) && Object.keys(state.userList).includes(payer)){
        let length = state.countUser.length 
        if(state.countUser.includes(payer)) length--
        let avg = num / (length + 1)
        avg = parseFloat(Number(avg).toFixed(2))
        console.log(avg)
        Object.keys(state.userList).map(el => {
          if(payer === el){
            state.userList[el] -= avg * (state.countUser.length)
          }
          if(state.countUser.includes(el)){
            state.userList[el] += avg
          }
        })
        state.expenseList.push(num);
        state.totalExpense += num;
        state.newExpense = '';
        state.payer = '';
        state.countUser = [];
      }
    },

    SET_NEW_EXPENSE: (state, action) => {
      state.newExpense = action.payload
    },

    RESET: (state, action) => {
      state.expenseList = [];
      state.totalExpense = 0;
    },

    COUNT_USER: (state, action) => {
      if(!state.countUser.includes(action.payload)){
        state.countUser.push(action.payload)
        console.log([...state.countUser])
      }
    },

    SET_PAYER: (state, action) => {
      state.payer = action.payload
    },
  }

})

export const { ADD_USER, SET_NEW_USER, ADD_EXPENSE, SET_NEW_EXPENSE, RESET, RESET_USER, COUNT_USER, SET_PAYER } = expenseSlice.actions;

export default expenseSlice.reducer;