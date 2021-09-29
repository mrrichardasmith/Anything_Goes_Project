import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0,
      testValue: 10
    },
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
      incrementTestValue: (state) => {
          state.testValue += 1
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount, incrementTestValue } = counterSlice.actions
  
  export default counterSlice.reducer