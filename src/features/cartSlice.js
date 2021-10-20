import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartWrapper: false
  },
  reducers: {
    addToCartCheckOut: (state, action) => {
      console.log(action.payload.id)
      const isProductAvailable = state.cart.filter(product => product.id === action.payload.id)
      if (isProductAvailable.length <= 0) {
        const product = {...action.payload, quantity: 1 }
        const newCart = [...state.cart, product]
        state.cart = newCart
      } else {
        state.cart = [...state.cart]
      }
    },
    removeFromCart: (state, action) => {
      const newCart = [...state.cart, action.payload]
      state.cart = newCart
    },
    openCartWrapper: (state) => {
      state.cartWrapper = !state.cartWrapper
    },
    increaseQuantity: (state, action) => {
      console.log(state.cart)
      console.log(action.payload)
    }
  }
})

export const { addToCartCheckOut, removeFromCart, openCartWrapper, increaseQuantity } = cartSlice.actions
export default cartSlice.reducer
