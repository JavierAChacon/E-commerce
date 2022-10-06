import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import productSlice from './slices/products.slice'

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    products: productSlice
	}
})