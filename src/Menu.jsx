import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export function Menu() {
  return(
    <Navbar expand="lg">
      <Navbar.Brand href="/"> My Website </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="./catplaceholder"> catplaceholder </Nav.Link>
          <Nav.Link href="./gallery1"> gallery1 </Nav.Link>
          <Nav.Link href="./gallery2"> gallery2 </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Menu;
