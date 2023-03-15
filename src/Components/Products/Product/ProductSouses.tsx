import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classnames from 'classnames';

export const ProductSouses: React.FC <any> = ({product, selectedSouse, setSelectedSouse}) => {
  return (
    <Card.Text>
      <Button
        variant="outline-warning"
        size="sm"
        active={selectedSouse === 0 ? true : false}
        className={classnames('product__button', {
          "product__button--hidden": product.souses.length === 0
        })}
        onClick={(e) => {
          e.preventDefault();
          setSelectedSouse(0);
        }}
      >
        <strong className='product__txtStrong'> 
          {product.souses[0]}
        </strong>
      </Button>
      {product.souses.length === 2 && (
        <Button 
          variant="outline-warning" 
          size="sm" 
          className='product__button' 
          onClick={(e) => {
            e.preventDefault();
            setSelectedSouse(1);
          }}
          active={selectedSouse === 1 ? true : false}
        >
        <strong className='product__txtStrong'>
          {product.souses[1]}
        </strong>
        </Button>
      )}
    </Card.Text>
  );
};

