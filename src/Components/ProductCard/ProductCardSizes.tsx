import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProductCardSizes: React.FC <any> = ({product, selectedSize, setSelectedSize}) => {
  return (
    <>
    {product.sizes && (
      <Card.Text>
      <Button 
        variant="outline-warning" 
        size="lg"
        active={selectedSize === 0 ? true : false}
        className="product__button"
        onClick={(e) => {
          e.preventDefault();
          setSelectedSize(0)
        }}
      >
        <strong
          className="product__txtStrong"
        >
          32 см
        </strong>
        <span className='product__txt'>
          {`(${product.sizes[0]} г.)`}
        </span>
      </Button>
      <Button 
        variant="outline-warning" 
        size="lg"
        className='product__button'
        active={selectedSize === 1 ? true : false}
        onClick={(e) => {
          e.preventDefault();
          setSelectedSize(1)
        }}
      >
        <strong className='product__txtStrong'>
          42 см
        </strong>
        <span className='product__txt'>
          {`(${product.sizes[1]} г.)`}
        </span>
      </Button>
      </Card.Text>
    )}
    </>
  );
};

