import React, { Dispatch, SetStateAction } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { HeaderNavLinks } from './HeaderNavLinks';
import { HeaderDropdown } from './HeaderDropdown';
import { HeaderAuth } from './HeaderAuth';
import { HeaderAuthenticated } from './HeaderAuthenticated';
import { HeaderCart } from './HeaderCart';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>
}

export const HeaderNav: React.FC <Props> = ({ setShow }) => {
  const accessToken = localStorage.getItem('accessToken');
  const user = useSelector((state: any) => state.auth.user);
  const handleShow = () => setShow(true);

  return (
    <Nav className='header__nav'>
      <HeaderNavLinks />
      <HeaderDropdown />
      <Button 
        variant="outline-primary" 
        onClick={handleShow}
      >
        Замовити дзвінок
      </Button>
      {!user || !accessToken ? (
        <HeaderAuth />
      ) : (
        <HeaderAuthenticated />
      )}
      <HeaderCart />
    </Nav>
  );
};

