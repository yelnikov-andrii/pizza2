import React from 'react';
import Card from 'react-bootstrap/Card';

export const ProductCardMainInfo: React.FC <any> = ({product}) => {
  return (
    <>
    <Card.Title>
      <h1>
        {product.name}
      </h1>
    </Card.Title>
    <Card.Text>
      Склад:
      <br />
      {product.components}
    </Card.Text>
    </>
  );
};

