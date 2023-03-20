import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import { ModalCallback } from './ModalCallback';
import { HeaderNav } from './HeaderNav';

export const Header:React.FC = () => {
  const [show, setShow] = React.useState(false);

  return (
    <Navbar 
      collapseOnSelect expand="xl" 
      bg="light"
      className='header' 
      variant="white"
    >
      <Container 
        fluid 
        className='header__container'
      >
        <LinkContainer
          to="/" 
          className="header__linkContainer"
        >
          <Navbar.Brand>
            Pizza shop
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas id="responsive-navbar-nav">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Меню
            </Offcanvas.Title>
          </Offcanvas.Header>
          <HeaderNav setShow={setShow} />
        </Navbar.Offcanvas>
        <ModalCallback 
          show={show} 
          setShow={setShow} 
        />
      </Container>
    </Navbar>
  );
};
