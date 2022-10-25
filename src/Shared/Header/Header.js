import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from './download (1).jpg'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
            <Navbar.Brand   href="#home">
            <Image roundedCircle style={{width: '60px'}} src={logo}>
                
            </Image> 
          </Navbar.Brand>
                <Navbar.Brand href="#home">Computer-Science</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="me-auto nav-link">
                        <NavLink to="/">Courses</NavLink>
                        <NavLink to="/fag">FAQ</NavLink>
                        <NavLink to="/blog">Blog</NavLink>   
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
