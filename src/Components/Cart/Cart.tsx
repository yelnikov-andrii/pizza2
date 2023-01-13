import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { CartForm } from './CartForm';

export const Cart: React.FC <any> = ({pizzasInCart, setPizzasInCart}) => {
  const sum = pizzasInCart.reduce((initialValue: any, pizza: any) => initialValue + pizza.quantity * pizza.prices[pizza.selectedSize], 0);
  const [filled, setFilled] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setFilled(false);
    }, 3000);
  }, [filled]);

  if (pizzasInCart.length === 0) {
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
    )
  }
  return (
    <Container className='cart'>
      <h1 className='cart__header'>
        Оформлення замовлення
      </h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th className='cart__photo'>
            Фото
          </th>
          <th>
            Назва
          </th>
          <th className='cart__size'>
            Розмір
          </th>
          <th className='cart__souse'>
            Соус
          </th>
          <th className='cart__tablePrice'>
            Ціна
          </th>
          <th className='cart__quantity'>
            Кількість
          </th>
          <th>
            Сума
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pizzasInCart.map((pizza: any) => (
          <tr key={pizza.id + pizza.selectedSouse + pizza.selectedSize}>
          <td className='cart__photo'>
            <img 
              src={pizza.img} 
              alt="" 
              className='cart__img'
            />
          </td>
          <td>{pizza.name}</td>
          <td className='cart__size'>{pizza.selectedSize === 0 ? '32 см' : '42 см'}</td>
          <td className='cart__souse'>{pizza.selectedSouse}</td>
          <td className='cart__tablePrice'>{pizza.prices[pizza.selectedSize]}</td>
          <td className='cart__quantity'>{pizza.quantity}</td>
          <td>{pizza.quantity * pizza.prices[pizza.selectedSize]}</td>
          <td>
            <button onClick={(e) => {
              e.preventDefault();
              const filteredPizzas = pizzasInCart.filter((p: any) => p.id !== pizza.id)
              setPizzasInCart(filteredPizzas);
            }}>
              Видалити
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    <p className='cart__sum'>
      Сума до оплати: {sum} грн.
    </p>
    {filled === false ? <CartForm setFilled={setFilled} /> : 
      <div>
        <h3>Дякуємо за замовлення</h3>
      </div>}
    </Container>
  );
};

