import { configureStore } from '@reduxjs/toolkit'
import counterReucer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReucer
    }
  })