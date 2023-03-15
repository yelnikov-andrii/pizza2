import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProductWeightOrCount: React.FC <any> = ({ product }) => {
  return (
    <Card.Text>
      <Button 
        variant="outline-warning" 
        size="sm"
        active
        className="product__button"
      >
        {product.weight > 0 && (
          <strong
            className="product__txtStrong"
          >
            {`${product.weight} г.`}
          </strong>
        )}
        {product.count > 0 && (
          <span 
            className='product__txt'
          >
            {`(${product.count} шт.)`}
          </span>
        )}
      </Button>
    </Card.Text>
  );
};

