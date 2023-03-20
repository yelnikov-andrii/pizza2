import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  orderError: string;
}

export const OrderError: React.FC <Props> = ({ orderError }) => {
  return (
    <Container className='order'>
      <p>
        Error {orderError}
      </p>
    </Container>
  );
};

