import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MY_COLORS } from '../MyColors';

export default function Header() {
  return (
    <div>
        <Navbar style={{backgroundColor: MY_COLORS.color1}} expand="lg">
            <Container>
                <Navbar.Brand href="#">Recycle Depot
                  {/* <Link to="/dashboard">Recycle Depot</Link> */}
                  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
