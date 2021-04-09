import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap'
import '../../index.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="nav">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand href="#home">ABC Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#About">About us</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                       {/*<Nav.Link eventKey={2} href="#memes">
                            Good stuff
                        </Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

    </div>
  );
}


export default NavBar;