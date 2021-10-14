import { createSlice } from '@reduxjs/toolkit'

const loadSlice = createSlice({
  name: 'load',
  initialState: {
    isLoading: false
  },
  reducers: {
    setIsLoading: state => {
      state.isLoading = !state.isLoading
    }
  }
})

export const { setIsLoading } = loadSlice.actions
export default loadSlice.reducer
