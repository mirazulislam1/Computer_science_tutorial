import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './download (1).jpg'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand   href="#home">
            <Image roundedCircle style={{width: '60px'}} src={logo}>
                
            </Image> 
          </Navbar.Brand>
                <Navbar.Brand href="#home">Computer-Science</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="me-auto">
                        <Nav.Link className='text-light' href="#features">Courses</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">FAQ</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">Blog</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
