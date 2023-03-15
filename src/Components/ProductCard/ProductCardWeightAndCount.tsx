import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProductCardWeightAndCount: React.FC <any> = ({product}) => {
  return (
    <>
      {product.weight && (
        <Card.Text>
          <Button 
            variant="outline-warning" 
            size="sm"
            active
            className="product__button"
          >
            <strong
              className="product__txtStrong"
            >
              {`${product.weight} г.`}
            </strong>
            {product.count && (
              <span className='product__txt'>
              {`(${product.count} шт.)`}
            </span>
            )}
          </Button>
        </Card.Text>
    )}
    </>
  );
};

