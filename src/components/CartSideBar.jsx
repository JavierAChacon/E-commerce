import React, { useEffect } from "react"
import { Offcanvas } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCartProductsThunk } from "../store/slices/cartProducts.slice"
const CartSideBar = ({show, handleClose}) => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartProductsThunk())
    }, [])

    const cartProducts = useSelector(state => state.cartProducts)
    
    return (

        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Cart</Offcanvas.Title>
                {
                    cartProducts.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                           
                            {product.title}

                        </Link>
                    ))
                }
            </Offcanvas.Header>
            
        </Offcanvas>

    )
}

export default CartSideBar