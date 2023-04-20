import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './TodoSlice'

const Store = configureStore({
  reducer: {
    TODO: todoReducer,
  },
})
export default Store
