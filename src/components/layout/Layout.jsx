import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const { REACT_APP_NAME } = process.env;

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{REACT_APP_NAME}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Checklist</Nav.Link>
              <Nav.Link href="#pricing">Checklist Items</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;
