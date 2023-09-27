import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillBasket2Fill } from 'react-icons/bs';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Header() {
const {quantity} = useSelector((store)=> store.cart)
//console.log(useSelector((store)=> store.cart));
    return (
    
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Kurslarım</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link"><BsFillBasket2Fill /> &nbsp; <span>{quantity}</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
}

export default Header

