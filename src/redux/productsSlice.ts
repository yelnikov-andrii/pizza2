import { createSlice } from '@reduxjs/toolkit'

export const productsSlice: any = createSlice({
  name: 'products',
  initialState: {
    products: [] as any,
  },
  reducers: {
    getProducts: (state, action: any) => {
      state.products = action.payload;
    },
    addProduct: (state, action: any) => {
      state.products.push(action.payload)
    },
    increment: (state, action: any) => {
      const foundProduct = state.products.find((el: any) => el.id === action.payload);
      foundProduct.quantity += 1;
    },
    incrementWithValue: (state, action: any) => {
      const foundProduct = state.products.find((el: any) => el.id === action.payload.id);
      foundProduct.quantity += action.payload.quantity;
    },
    removeProduct: (state, action: any) => {
      state.products = state.products.filter((el: any) => el.id !== action.payload);
    }
  }
})

export const { addProduct, increment, removeProduct, getProducts, incrementWithValue } = productsSlice.actions

export default productsSlice.reducer