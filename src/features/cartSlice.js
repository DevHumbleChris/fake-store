import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCartCheckOut: (state, action) => {
      const isProductAvailable = state.cart.map(product => product.id === action.payload.id)
      console.log(isProductAvailable.length)
      if (isProductAvailable.length <= 0) {
        state.cart = state.cart
      } else {
        const product = {...action.payload, quantity: 1 }
        const newCart = [...state.cart, product]
        state.cart = newCart
      }
    }
  }
})

export const { addToCartCheckOut } = cartSlice.actions
export default cartSlice.reducer
