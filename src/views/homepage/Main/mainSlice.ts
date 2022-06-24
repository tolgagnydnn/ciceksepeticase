
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
  const response = await axios.get('/api/categories/all-categories')
  return  response.data
})

export const getAllProducts = createAsyncThunk('products/categoryGetProducts', async (params:any) => {
  const response = await axios.get('/apps/categories/getCategoryProducts', { params })
  return { params, data: response.data }
})

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    params: {},
    allProducts: [],
    allCategories: [],
    totalProducts: 0,
    totalPrice: 0,
    basketCount: 0,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(getAllCategories.fulfilled, (state:any, action) => {
      state.allCategories = action.payload
    })
      .addCase(getAllProducts.fulfilled, (state:any, action) => {
        state.params = action.payload.params
        state.allProducts = action.payload.data.products
        state.totalProducts = action.payload.data.total
      })
  }
})

export default productSlice.reducer
