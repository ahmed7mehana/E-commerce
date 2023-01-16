import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Appnavbar() {
  const cart = useSelector(state=>state.cart)

  return (
          <Navbar bg="dark" >
          <Container>
            <Link className="Logo" to="/">SHoping</Link>
            <Nav className="me-auto">
              <Link className='Nav.Link'  to="/">Products</Link>
              <Link className={'Nav.Link'} to="/Cart" >Cart- ({cart.length})</Link>
            </Nav>
          </Container>
        
        </Navbar>
  )
}

export default Appnavbar