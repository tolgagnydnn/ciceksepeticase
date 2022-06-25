
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { ProductInterface, CategoriesInterface } from 'models/ProductModel'

export const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
  const response = await axios.get('/api/categories/all-categories')
  return  response.data
})

export const getAllProducts = createAsyncThunk('products/categoryGetProducts', async (params:{}) => {
  const response = await axios.get('/apps/categories/getCategoryProducts', { params })
  return { params, data: response.data }
})

export interface InitialInterface {
  params: object,
  allProducts: ProductInterface[]
  allCategories: CategoriesInterface[]
  totalProducts: number
  basket: {
    products: ProductInterface[]
    count: number,
    totalPrice: number
  },
  categoryLoading: null  | boolean
  productLoading: null  | boolean
}

const initialState: InitialInterface = {
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
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    calculateCount: (state:InitialInterface) => {
      let count: number = 0
      state.basket.products.forEach((basketObj) => {
        count += basketObj.orderCount
      });
      state.basket.count = count
    },
    calculatePrice: (state:InitialInterface) => {
      let totalPrice: number = 0
      state.basket.products.forEach((basketObj) => {
        let count: number = basketObj.orderCount
        let price: number = basketObj.price
        totalPrice += count * price
      });
      state.basket.totalPrice = totalPrice
    },
    addBasket: (state:InitialInterface, action:PayloadAction<any>) => {
      const orderObj = {...action.payload, orderCount: 1}
      const isExists: boolean = state.basket.products.findIndex((el) => el.id === action.payload.id) > -1
      if (!isExists) {
        state.basket.products.push(orderObj)
      }
      productSlice.caseReducers.calculateCount(state)
      productSlice.caseReducers.calculatePrice(state)
    },
    incrementBasketItem: (state:InitialInterface, action:PayloadAction<any>) => {
      const index: number = state.basket.products.findIndex((el) => el.id === action.payload.id)
      if(index > -1) {
        state.basket.products[index].orderCount += 1
      }
      productSlice.caseReducers.calculateCount(state)
      productSlice.caseReducers.calculatePrice(state)
    },
    decrementBasketItem: (state:InitialInterface, action:PayloadAction<any>) => {
      const index: number = state.basket.products.findIndex((el) => el.id === action.payload.id)
      if(index > -1) {
        if (state.basket.products[index].orderCount > 1) {
          state.basket.products[index].orderCount -= 1
        } else {
          const filteredObj = state.basket.products.filter((el) => el.id !== state.basket.products[index].id)
          state.basket.products = [...filteredObj]
        }
      }
      productSlice.caseReducers.calculateCount(state)
      productSlice.caseReducers.calculatePrice(state)
    }
   },
  extraReducers: builder => {
    builder
    .addCase(getAllCategories.pending, (state) => {
      state.categoryLoading = true
    })
    .addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload
      state.categoryLoading = false
    })
    .addCase(getAllProducts.pending, (state) => {
      state.productLoading = true
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.params = action.payload.params
      state.allProducts = action.payload.data.products
      state.totalProducts = action.payload.data.total
      state.productLoading = false
    })
  }
})

export const {addBasket, incrementBasketItem, decrementBasketItem} = productSlice.actions
export default productSlice.reducer
