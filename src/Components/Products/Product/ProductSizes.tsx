import React, { Dispatch, SetStateAction } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
  product: any;
  selectedSize: number;
  setSelectedSize: Dispatch<SetStateAction<number>>;
}

export const ProductSizes: React.FC <Props> = ( {product, selectedSize, setSelectedSize }) => {
  return (
    <Card.Text>
      <Button 
        variant="outline-warning" 
        size="sm"
        active={selectedSize === 0 ? true : false}
        className="product__button"
        onClick={(e) => {
          e.preventDefault();
          setSelectedSize(0);
        }}
      >
        <strong
          className="product__txtStrong"
        >
          32 см
        </strong>
        <span 
          className='product__txt'
        >
          {`(${product.sizes[0]} г.)`}
        </span>
      </Button>
      <Button 
        variant="outline-warning" 
        size="sm"
        className='product__button'
        active={selectedSize === 1 ? true : false}
        onClick={(e) => {
          e.preventDefault();
          setSelectedSize(1);
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
  );
};
