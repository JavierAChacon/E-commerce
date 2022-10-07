import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const cartProducts = createSlice({
		name: 'cartProducts',
    initialState: [],
    reducers: {
        setCartProducts: (state, action) => action.payload
    }
})

export const getCartProductsThunk = () => dispatch => {
  dispatch(setIsLoading(true))
  axios
  .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
  .then(res => {
      dispatch(setCartProducts(res.data.data.cart.products))})
  .finally(() => dispatch(setIsLoading(false)))
}



export const { setCartProducts } = cartProducts.actions;

export default cartProducts.reducer;