import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "../styles/login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const {register, handleSubmit} = useForm()

    const navigate = useNavigate()


    const submit = (data) => {
        console.log(data)
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
        .then(res=> {
            alert("Usuario loggeado")
            localStorage.setItem("token", res.data.data.token)
            navigate('/')
        })
        .catch(error => {
            console.log(error.response.status)
            if(error.response.status === 404){
                alert("Credenciales invalidas")
            }
        })
    }
    
    return (
        <div className='login'>
            <h1>Login</h1>
            <Form onClick={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register("email")}type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password")}type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;