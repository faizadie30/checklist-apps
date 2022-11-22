import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
const { REACT_APP_NAME } = process.env;

function Layout(props) {
  const { children, menu } = props;
  const navigate = useNavigate();

  const toLogin = () => {
    navigate('/login');
  };
  const toChecklist = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">{REACT_APP_NAME}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#checklist"
                onClick={() => toChecklist()}
                active={menu === 'checklist' ? true : false}
              >
                Checklist
              </Nav.Link>
              <Nav.Link
                href="#checklist-items"
                active={menu === 'checklist_items' ? true : false}
              >
                Checklist Items
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#login"
                onClick={() => toLogin()}
                active={menu === 'login' ? true : false}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="#register"
                active={menu === 'register' ? true : false}
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
