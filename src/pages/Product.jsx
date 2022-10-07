import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addCartThunk } from '../store/slices/cartProducts.slice';

const Product = () => {
    
    const { id } = useParams()

    const dispatch = useDispatch()

    const productsList = useSelector(state => state.products)

    const productDetail = productsList.find(product => product.id === Number(id))

    const relatedProducts = productsList.filter(product => product.category.id === productDetail.category.id)

    const [quantity, setQuantity] = useState(0)

    const add = () => {
        const product = {
            id: id,
            quantity: quantity
        }
        dispatch(addCartThunk(product))
    }

    useEffect(() => {
        setQuantity(0)
    }, [id])
    
    return (
        <div>
           <h1>{productDetail?.title}</h1>
           
           <div className='cart'>
            <Button onClick={() => setQuantity(quantity - 1)} disabled = {quantity === 0}>-</Button>
            {quantity}
            <Button onClick={() => setQuantity(quantity + 1)}>+</Button>

            <Button onClick={add} disabled={quantity === 0}>Add to cart</Button>
           </div>

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