import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardComponents } from '../../UI/CardComponents/CardComponents';
import { LinkContainer } from 'react-router-bootstrap';

export const ProductMainInfo: React.FC <any> = ({ product }) => {
  return (
    <>
      <LinkContainer to={product.id.toString()} >
        <Card.Title className='product__name'>
          {product.name}
        </Card.Title>
      </LinkContainer>
      <Card.Subtitle>
        <CardComponents components={product.components} />
      </Card.Subtitle>
    </>
  );
};

