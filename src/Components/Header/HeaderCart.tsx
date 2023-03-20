import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { useGetCountOfProducts } from '../../hooks/useGetCountOfProducts';

export const HeaderCart = () => {
  const countOfProducts = useGetCountOfProducts();
  return (
    <LinkContainer to="cart">
      <Nav.Link className='header__cart'>
        Кошик 
        {countOfProducts > 0 && 
        (
          <span className='header__cart--count'>
            {countOfProducts}
          </span>
        )}
      </Nav.Link>
    </LinkContainer>
  );
};

