import React from 'react';
import { Container } from 'react-bootstrap';

export const Delivery = () => {
  const delArr = [
    "Приймаємо замовлення щоденно з 10:00 до 20:00;",
    "Термін доставки 60-90 хвилин з моменту прийняття замовлення",
    " Мінімальне замовлення на доставку від 250 гривень;",
    "Вартість доставки 50 грн.;",
    "Постійні акції та знижки;",
    "Знижки для клієнтів.",
    "Телефони:",
    "+3809312345678",
    "+3806712345678",
    "+3809912345678"
  ];
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

