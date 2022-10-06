import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Product = () => {
    
    const { id } = useParams()

    const productsList = useSelector(state => state.products)

    const productDetail = productsList.find(product => product.id === Number(id))

    console.log(productDetail)

    return (
        <div>
           <h1>{productDetail?.title}</h1>
           <img src={productDetail?.productImgs[0]} alt="" />
        </div>
    );
};

export default Product;