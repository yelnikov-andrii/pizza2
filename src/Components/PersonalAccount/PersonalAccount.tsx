import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { url } from '../../data';
import { useRequest } from '../../hooks/useRequest';
import { LoadingOval } from '../UI/Loading/LoadingOval';

export const PersonalAccount = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [orders, ordersLoading, ordersError]: any = useRequest(getOrders);
  const accessToken = localStorage.getItem('accessToken');

  function getOrders() {
    return axios.get(`${url}/orders/?email=${user.email}`, {
      headers:{
        Authorization: `Bearer ${accessToken}`,
      },
      // withCredentials: true
    })
  }

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
        {orders && orders.length > 0 ? 'Ваші замовлення' : 'Замовлень немає'}
      </h5>
      {ordersLoading ? (
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

