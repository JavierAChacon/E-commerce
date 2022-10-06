import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

const Home = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const products = useSelector(state => state.products) 

    return (
        <div>
            <h1>Esta es la ruta Home</h1>
            {
                products.map((product) => (
                    <p key={product.id}>{product.title}</p>
                ))
            }
        </div>
    );
};

export default Home;