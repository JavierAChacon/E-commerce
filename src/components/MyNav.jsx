import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MyNav = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to='./' as={Link}>Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='./login' as={Link}>Login</Nav.Link>
            <Nav.Link to='./purchases' as={Link}>Purchases</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default MyNav;