import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct } from '../../redux/productsSlice';
import { CartForm } from './CartForm';

export const Cart: React.FC <any> = () => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const sum = productsInCart.reduce((initialValue: any, product: any) => initialValue + ((product.prices && product.quantity * product.prices[product.selectedSize]) || product.quantity * product.price), 0)
  const [filled, setFilled] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setFilled(false);
    }, 3000);
  }, [filled]);

  if (productsInCart.length === 0) {
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
        {productsInCart.map((product: any) => (
          <tr key={product.id + product.selectedSouse + product.selectedSize}>
          <td className='cart__photo'>
            <img 
              src={product.img} 
              alt="" 
              className='cart__img'
            />
          </td>
          <td>{product.name}</td>
          <td className='cart__size'>
            {!product.hasOwnProperty('selectedSize') ? '-' : product.selectedSize === 0 ? '32 см' : '42 см'}
          </td>
          <td className='cart__souse'>
            {product.selectedSouse || '-'}
          </td>
          <td className='cart__tablePrice'>
            {(product.prices && product.prices[product.selectedSize]) || product.price}
          </td>
          <td className='cart__quantity'>
            {product.quantity}
          </td>
          <td>
            {(product.prices && product.quantity * product.prices[product.selectedSize]) || product.price}
          </td>
          <td>
            <button onClick={(e) => {
              e.preventDefault();
              dispatch(removeProduct(product.id));
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

