import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
// import useFirebase from '../../../Hook/useFirebase';

const Header = () => {
  const {user , logOut } = useAuth()
    return (
        
         <>
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand as={Link} to="/home">Vicodin Clinic</Navbar.Brand>
    <Nav className="me-auto">
      
      
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
     
      {user?.email ?
      <Nav.Link onClick={logOut} as={Link} to="/login">LogOut</Nav.Link>:
      <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
      <Navbar.Text>
        Signed in as: <Link to="/login">{user?.displayName} </Link>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
 
        
        </>
    );
};

export default Header;