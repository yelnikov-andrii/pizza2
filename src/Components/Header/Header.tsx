import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const Header:React.FC<any> = ({count}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar 
      collapseOnSelect expand="lg" 
      bg="light"
      className='header' 
      variant="white"
    >
      <Container fluid className='header__container'>
        <LinkContainer to="/pizzas" className="header__linkContainer">
          <Navbar.Brand>Pizza shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas id="responsive-navbar-nav">
          <Nav className='header__nav'>
            <LinkContainer to="/delivery">
              <Nav.Link className='header__link'>Доставка та оплата</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Блог</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Про компанію</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/discounts">
              <Nav.Link>Акції</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/places">
              <Nav.Link>Наші заклади</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/vacancies">
              <Nav.Link>Вакансії</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <Nav.Link>Контакти</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Телефони" id="collasible-nav-dropdown">
              <NavDropdown.Item href="tel:+3809312345678">
                +3809312345678
              </NavDropdown.Item>
              <NavDropdown.Item href="tel:+3809912345678">
                +3809912345678
              </NavDropdown.Item>
              <NavDropdown.Item href="tel:+3806812345678">+3806812345678
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-primary" onClick={handleShow}>
              Замовити дзвінок
            </Button>
            <LinkContainer to="login">
            <Nav.Link>Логін</Nav.Link>
          </LinkContainer>
          <LinkContainer to="cart">
            <Nav.Link className='header__cart'>
              Кошик 
              {count > 0 && (
              <span className='header__cart--count'>
                {count}
              </span>
              )}
            </Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Offcanvas>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Замовити дзвінок</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="contactsForm" onSubmit={handleClose}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Ім'я</Form.Label>
            <Form.Control type="text" placeholder="Ім'я" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Телефон</Form.Label>
            <Form.Control type="text" placeholder="Телефон" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Відправити
          </Button>
        </Form>
        </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
};

