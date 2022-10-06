import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form } from 'react-bootstrap';



const Home = () => {

    const navigate = useNavigate()

    const products = useSelector(state => state.products)

    const [categories, setCategories] = useState([])

    const [productsFiltered, setProductsFiltered] = useState([products])

    const [searchValue, setSearchValue] = useState("")

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

    const search = () => {
        searchValue.toLowerCase()
        const name = searchValue[0].toUpperCase() + searchValue.slice(1)
        const filtered = products.filter(product => product.title.includes(name))
        setProductsFiltered(filtered)
    }

    return (
        <div>
            <div className='nav'>

                {
                    categories.map(category => (
                        
                        <Button key={category.id} classname="nav" onClick={() => filterCategory(category.id)}>{category.name}</Button>
                    ))
                }

            </div>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search products"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={search}>
                    Search
                </Button>
            </InputGroup>

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