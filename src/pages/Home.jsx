import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { addListener } from '@reduxjs/toolkit';


const Home = () => {
    
    const navigate = useNavigate()

    const products = useSelector(state => state.products)

    const [categories, setCategories] = useState([])
    
    const [productsFiltered, setProductsFiltered] = useState([products])
    
    console.log(productsFiltered)

    useEffect(() => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
        .then(res => setCategories(res.data.data.categories))
    }, [])

    useEffect(() => {
        setProductsFiltered(products)
    }, [products])
    
    const filterCategory = (categoryId) => {
        const filtered = products.filter(product => product.category.id === categoryId)
        setProductsFiltered(filtered)
    }

    return (
        <div>
            <h1>Esta es la ruta Home</h1>
            
            {
                categories.map(category => (
                    <Button key={category.id} onClick={() => filterCategory(category.id)}>{category.name}</Button>
                ))
            }
        
            {
                productsFiltered.map((product) => (
                    <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                        
                        <h2>{product.title}</h2>
        
                    </div>
                ))
            }
        </div>
    );
};

export default Home;