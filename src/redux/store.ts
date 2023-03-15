import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import productsSlice from './productsSlice'

export default configureStore({
  reducer: {
    product: productsSlice,
    auth: authSlice,
  }
})