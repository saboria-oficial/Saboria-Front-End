 //essencial
import React from 'react';
import ReactDOM from 'react-dom'
//bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
// font dos homi
import '@fortawesome/fontawesome-free/css/solid.css';
// css
import '../css/navbar.css'
//logo
import logo from '../img/logotipo-amarelo.webp'
function Header() {
  return (
    <Navbar expand="lg" className=" mb-3">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo saboria" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"><img src={logo} alt="logotipo Saboria" /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className='nav-link'>Inicio</Nav.Link>
              <Nav.Link href="#action2" className='nav-link'>Sobre</Nav.Link>
              <Nav.Link href="#action3" className='nav-link'>Restaurantes</Nav.Link>
              <Nav.Link href="#action4" className='nav-link'>Localização</Nav.Link>
              <NavDropdown title="Atendimento" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action5" className='nav-link'>FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action6" className='nav-link'>Fale Conosco</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action7" className='nav-link'>Planos</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Pesquise aqui"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"></Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
