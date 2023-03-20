import React from 'react';
import { Container } from 'react-bootstrap';
import { LoadingOval } from '../UI/Loading/LoadingOval';
import { useGetSum } from '../../hooks/useGetSum';
import { useOrder } from '../../API/services/Orders/useOrder';
import { useGetOrdersProducts } from '../../API/services/Orders/useGetOrdersProducts';
import { OrderError } from './OrderError';
import { OrderTable } from './OrderTable';

export const Order: React.FC <any> = () => {
  const {order, orderLoading, orderError} = useOrder();
  const { initialProducts, products } = useGetOrdersProducts(order);
  const {sum} = useGetSum(products, initialProducts);

  if (orderError) {
    return (
      <OrderError orderError={orderError} />
    );
  }

  return (
    <Container className='order'>
      {orderLoading === true ? (
        <LoadingOval />
      ) : (
        <>
          {order && (
            <>
              <h1>{new Date(order.createdAt).toUTCString().slice(0, -4)}</h1>
              <p>
                Адреса: {order.address}
              </p>
              Продукти:
              <OrderTable 
                initialProducts={initialProducts}
                products={products}
              />
              <p className='cart__sum'>
                Сума замовлення: {sum} грн.
              </p>
            </>
          )}
        </>
      )}
    </Container>
  );
};
