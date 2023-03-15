import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CartEmpty: React.FC <any> = () => {

  return (
    <Container className='cart'>
      <h1 className='cart__header'>
        Ваш кошик порожній
      </h1>
      <div className='cart__emptyBox'>
        <img 
          src="https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-0939697612-1.jpg"
          alt=""
        />
        <Link 
          to="/"
          className="cart__goBack"
        >
          На головну
        </Link>
      </div>
    </Container>
  );
};

