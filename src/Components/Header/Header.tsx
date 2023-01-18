import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import { ModalCallback } from './ModalCallback';

export const Header:React.FC<any> = ({count}) => {
  const [show, setShow] = React.useState(false);
  const navLinks = [
    {
      name: 'Доставка та оплата',
      url: '/delivery'
    },
    {
      name: 'Блог',
      url: '/blog'
    },
    {
      name: 'Про компанію',
      url: '/about'
    },
    {
      name: 'Акції',
      url: '/discounts'
    },
    {
      name: 'Наші заклади',
      url: '/places'
    },
    {
      name: 'Вакансії',
      url: '/vacancies'
    },
    {
      name: 'Контакти',
      url: '/contacts'
    }
  ];
  const phones = ['+3809312345678',
  '+3806712345678',
  '+3809912345678',];

  const handleShow = () => setShow(true);
  return (
    <Navbar 
      collapseOnSelect expand="lg" 
      bg="light"
      className='header' 
      variant="white"
    >
      <Container fluid className='header__container'>
        <LinkContainer to="/" className="header__linkContainer">
          <Navbar.Brand>Pizza shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas id="responsive-navbar-nav">
          <Nav className='header__nav'>
            {navLinks.map((navLink: any) => (
              <LinkContainer to={navLink.url} key={navLink.name}>
                <Nav.Link>{navLink.name}</Nav.Link>
            </LinkContainer>
            ))}
            <NavDropdown title="Телефони" id="collasible-nav-dropdown">
              {phones.map((phone) => (
                <NavDropdown.Item href={`tel:${phone}`} key={phone}>
                  {phone}
                </NavDropdown.Item>
              ))}
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
        <ModalCallback show={show} setShow={setShow} />
      </Container>
    </Navbar>
  );
};

