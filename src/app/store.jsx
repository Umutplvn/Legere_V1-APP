import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import blogDataReducer from "../features/blogDataSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogDataReducer
  },
  devTools: process.env.NODE_ENV !== "production",
})