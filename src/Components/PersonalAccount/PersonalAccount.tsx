import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoadingOval } from '../UI/Loading/LoadingOval';
import { useOrders } from '../../API/services/Orders/useOrders';

export const PersonalAccount = () => {
  const { orders, ordersError, ordersLoading } = useOrders();

  if (ordersError) {
    return (
      <Container className='personalAccount'>
        <p>
          Error {ordersError}
        </p>
      </Container>
    )
  }

  return (
    <Container className='personalAccount'>
      <h1 className='personalAccount__title'>
        Особистий кабінет
      </h1>
      <h5 className='personalAccount__ordersTitle'>
        {orders && orders.length > 0 ? 'Ваші замовлення' : ordersLoading === true ? 'Завантаження' : 'Замовлень немає'}
      </h5>
      {ordersLoading === true ? (
        <LoadingOval />
      ) : (
        <div>
        {orders && orders.map((order: any) => (
          <Link to={`orders/${order.id.toString()}`} key={order.id}>
            <p>Дата замовлення: {order.createdAt}</p>
          </Link>
        ))}
      </div>
      )}
    </Container>
  );
};

