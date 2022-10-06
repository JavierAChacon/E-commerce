import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';

const productSlice = createSlice({
	name: 'products',
    initialState: [],
    reducers: {
        
        setProducts : (state, action) => {
            return action.payload
        }
    }
})

export const getProductsThunk = () => dispatch => {
    axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/products/')
    .then(res => {
        dispatch(setProducts(res.data.data.products))
    })
}



export const { setProducts } = productSlice.actions;

export default productSlice.reducer;