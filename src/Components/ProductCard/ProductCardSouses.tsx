import React, { Dispatch, SetStateAction } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';

interface Props {
  product: any;
  selectedSouse: number;
  setSelectedSouse: Dispatch<SetStateAction<number>>;
}

export const ProductCardSouses: React.FC <Props> = ({product, selectedSouse, setSelectedSouse}) => {
  return (
    <>
      {product.souses && (
        <Card.Text>
          <Button
            variant="outline-warning"
            size="lg"
            active={selectedSouse === 0 ? true : false}
            className={classnames('product__button', {
              'product__button--hidden': product.souses.length === 0,
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
              size="lg" 
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
      )}
    </>
  );
};

