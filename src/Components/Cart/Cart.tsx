import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useGetSum } from '../../hooks/useGetSum';
import { CartAfterFilledForm } from './CartAfterFilledForm';
import { CartEmpty } from './CartEmpty';
import { CartForm } from './CartForm';
import { CartTable } from './CartTable';

export const Cart: React.FC <any> = () => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const { sum } = useGetSum(productsInCart);
  const [filled, setFilled] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setFilled(false);
    }, 3000);
  }, [filled]);

  if (productsInCart.length === 0 && filled === false) {
    return (
      <CartEmpty />
    )
  };

  return (
    <Container className='cart'>
      {!filled ? (
        <>
          <h1 className='cart__header'>
            Оформлення замовлення
          </h1>
          <CartTable 
            productsInCart={productsInCart}
          />
          <p className='cart__sum'>
            Сума до оплати: {sum} грн.
          </p>
          <CartForm setFilled={setFilled} />
        </>
      ) : (
          <CartAfterFilledForm />
        )}
    </Container>
  );
};

