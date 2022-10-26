
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from './download (1).jpg'
import './Header.css'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () =>{})
        .catch(error =>console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
            <Navbar.Brand   href="#home">
            <Image roundedCircle style={{width: '60px'}} src={logo}>
                
            </Image> 
          </Navbar.Brand>
                <Navbar.Brand href="#home">Computer-Science</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="me-auto nav-link">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to="/course">Courses</NavLink>
                        <NavLink to="/fag">FAQ</NavLink>
                        <NavLink to="/blog">Blog</NavLink>   
                    </Nav>
                    <Nav className='nav-link'>
                        {
                            user?.uid ?
                            <> 
                                <span>{user?.displayName}</span>
                                <Button variant="info" onClick={handleLogOut}>LogOut</Button>
                            </>
                            :
                            <>
                                <NavLink to="/login">Login</NavLink>
                                <NavLink to="/register">Register</NavLink>
                            </>
                        }
                       
                        
                        <NavLink>
                        {
                            user?.photoURL ? 
                            <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
                            : <FaUser></FaUser>
                        }
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
