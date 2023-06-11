import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../Photo/images/logo2.png'

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>

        <Container  style={{display: 'flex'}} >
          <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cart"> <AiOutlineShoppingCart></AiOutlineShoppingCart></Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
    </div>
  );
};

export default Header;