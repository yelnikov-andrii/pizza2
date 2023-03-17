import React from 'react';
import { Container } from 'react-bootstrap';
import { delArr } from '../../data';

export const Delivery = () => {
  return (
    <Container className='delivery'>
      <h1 className='delivery__title'>
        Доставка та оплата
      </h1>
        <div className="delivery__block">
          <p className="delivery__blockTitle">
            Доставка та оплата
          </p>
        <ul className="delivery__list">
          {delArr.map(item => (
            <li className="delivery__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        </div>
    </Container>
  );
};

