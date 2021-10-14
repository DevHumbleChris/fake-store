import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCartCheckOut: (state, action) => {
      const newCart = [...state.cart, action.payload]
      state.cart = newCart
    }
  }
})

export const { addToCartCheckOut } = cartSlice.actions
export default cartSlice.reducer
