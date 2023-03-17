import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import { ModalCallback } from './ModalCallback';
import { NavLink } from '../../types/types';
import { useSelector } from 'react-redux';
import { navLinks, phones } from '../../data';
import { useLogout } from '../../API/services/Auth/useLogout';

interface Props {
  count: number;
}

export const Header:React.FC<Props> = ({count}) => {
  const [show, setShow] = React.useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const user = useSelector((state: any) => state.auth.user);
  const { logout } = useLogout();

  const handleShow = () => setShow(true);
  return (
    <Navbar 
      collapseOnSelect expand="lg" 
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
          <Nav className='header__nav'>
            {navLinks.map((navLink: NavLink) => (
              <LinkContainer 
                to={navLink.url} 
                key={navLink.name}
              >
                <Nav.Link>
                  {navLink.name}
                </Nav.Link>
              </LinkContainer>
            ))}
            <NavDropdown 
              title="Телефони" 
              id="collasible-nav-dropdown" 
              className='header__dropdown'
            >
              {phones.map((phone) => (
                <NavDropdown.Item 
                  href={`tel:${phone}`} 
                  key={phone}
                >
                  {phone}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Button 
              variant="outline-primary" 
              onClick={handleShow}
            >
              Замовити дзвінок
            </Button>
            {!user || !accessToken ? (
              <>
                <LinkContainer to="login">
                <Nav.Link>
                  Логін
                </Nav.Link>
                </LinkContainer>
                <LinkContainer to="registration">
                <Nav.Link>
                  Реєстрація
                </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
              <Nav.Link onClick={(e) => {
                e.preventDefault();
                logout();
              }}>
                Вийти
              </Nav.Link>
              <LinkContainer to="personal-account">
                <Nav.Link>
                  Кабінет особистий
                </Nav.Link>
              </LinkContainer>
              </>
            )}
          <LinkContainer to="cart">
            <Nav.Link className='header__cart'>
              Кошик 
              {count > 0 && 
              (
              <span className='header__cart--count'>
                {count}
              </span>
              )}
            </Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Offcanvas>
        <ModalCallback 
          show={show} 
          setShow={setShow} 
        />
      </Container>
    </Navbar>
  );
};
