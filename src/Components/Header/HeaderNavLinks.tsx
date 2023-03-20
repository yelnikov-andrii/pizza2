import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from '../../types/types';
import { navLinks } from '../../utils/data';

export const HeaderNavLinks = () => {
  return (
    <>
      <LinkContainer 
        to="/"
        className="header__link header__link--mobile"
      >
        <Nav.Link>
          Головна
        </Nav.Link>
      </LinkContainer>
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
    </>
  );
};

