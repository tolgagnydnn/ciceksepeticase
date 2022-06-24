
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
    basket: {
      products: [],
      count: 0,
      totalPrice: 0
    },
    categoryLoading: null,
    productLoading: null
  },
  reducers: {
    calculateCount: (state:any) => {
      let count = 0
      state.basket.products.forEach((basketObj:any) => {
        count += basketObj.orderCount
      });
      state.basket.count = count
    },
    calculatePrice: (state:any) => {
      let totalPrice = 0
      state.basket.products.forEach((basketObj:any) => {
        let count = basketObj.orderCount
        let price = basketObj.price
        totalPrice += count * price
      });
      state.basket.totalPrice = totalPrice
    },
    addBasket: (state:any, action:any) => {
      const orderObj = {...action.payload, orderCount: 1}
      const isExists = state.basket.products.findIndex((el:any) => el.id === action.payload.id) > -1
      if (!isExists) {
        state.basket.products.push(orderObj)
      }
      productSlice.caseReducers.calculateCount(state)
      productSlice.caseReducers.calculatePrice(state)
    },
    incrementBasketItem: (state:any, action:any) => {
      const index = state.basket.products.findIndex((el:any) => el.id === action.payload.id)
      if(index > -1) {
        state.basket.products[index].orderCount += 1
      }
      productSlice.caseReducers.calculateCount(state)
      productSlice.caseReducers.calculatePrice(state)
    },
    decrementBasketItem: (state:any, action:any) => {
      const index = state.basket.products.findIndex((el:any) => el.id === action.payload.id)
      if(index > -1) {
        if (state.basket.products[index].orderCount > 1) {
          state.basket.products[index].orderCount -= 1
        } else {
          const filteredObj = state.basket.products.filter((el:any) => el.id !== state.basket.products[index].id)
          state.basket.products = [...filteredObj]
        }
      }
      productSlice.caseReducers.calculateCount(state)
      productSlice.caseReducers.calculatePrice(state)
    }
   },
  extraReducers: builder => {
    builder
    .addCase(getAllCategories.pending, (state:any, action) => {
      state.categoryLoading = true
    })
    .addCase(getAllCategories.fulfilled, (state:any, action) => {
      state.allCategories = action.payload
      state.categoryLoading = false
    })
    .addCase(getAllProducts.pending, (state:any, action) => {
      state.productLoading = true
    })
    .addCase(getAllProducts.fulfilled, (state:any, action) => {
      state.params = action.payload.params
      state.allProducts = action.payload.data.products
      state.totalProducts = action.payload.data.total
      state.productLoading = false
    })
  }
})

export const {addBasket, incrementBasketItem, decrementBasketItem} = productSlice.actions
export default productSlice.reducer
