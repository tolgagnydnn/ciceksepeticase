
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllProducts = createAsyncThunk('appProducts/getAllProducts', async () => {
  const response = await axios.get('/api/products/all-products')
  return  response.data
})


// export const getUser = createAsyncThunk('appUsers/getUser', async id => {
//   const response = await axios.get('/api/users/user', { id })
//   return response.data.user
// })

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    totalProducts: 0,
    totalPrice: 0,
    basketCount: 0,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload
        state.totalProducts = action.payload.length
      })
  }
})

export default productSlice.reducer
