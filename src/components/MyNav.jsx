import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


const MyNav = () => {
  
  
  const navigate = useNavigate()

  const logout =()=>{
    localStorage.setItem("token", "")
    navigate("/login")
  }



    return (
        <Navbar bg="primary" variant="dark">
        <Container className='container'>
          <Navbar.Brand to='./' as={Link}>Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='./login' as={Link}>Login</Nav.Link>
            <Nav.Link to='./purchases' as={Link}>Purchases</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default MyNav;