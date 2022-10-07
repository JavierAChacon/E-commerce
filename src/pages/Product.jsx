import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {
    
    const { id } = useParams()

    const productsList = useSelector(state => state.products)

    const productDetail = productsList.find(product => product.id === Number(id))

    const relatedProducts = productsList.filter(product => product.category.id === productDetail.category.id)

    console.log(relatedProducts)

    return (
        <div>
           <h1>{productDetail?.title}</h1>
           <img src={productDetail?.productImgs[0]} alt="" />
            {
                relatedProducts.map(product => (
                    <div key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;