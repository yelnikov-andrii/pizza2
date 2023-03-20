import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useAddProduct } from '../../hooks/useAddProduct';

interface Props {
  product: any;
  selectedSize: number;
  selectedSouse: number;
  showAlert: () => void;
}

export const ProductCardCounter: React.FC <Props> = ({product, selectedSize, selectedSouse, showAlert}) => {
  const [quantity, setQuantity] = React.useState(1);
  const productsInCart = useSelector((state: any) => state.product.products);
  const { add } = useAddProduct(product, selectedSize, selectedSouse, showAlert, productsInCart, quantity, true);

  return (
    <Card.Text className='productCard__counter'>
      <button
        className='productCard__button'
        onClick={(e) => {
          e.preventDefault();
          if (quantity > 0) {
            setQuantity(prev => prev - 1);
          }
        }}
      >
        -
      </button>
      <input 
        className='productCard__input'
        value={quantity}
        onChange={(e) => {
          if (isNaN(+e.target.value) || +e.target.value < 0) {
            return;
          }
          setQuantity(+e.target.value);
        }}
      />
      <button 
        className='productCard__button'
        onClick={(e) => {
          e.preventDefault();
          setQuantity(prev => prev + 1);
        }}
      >
        +
      </button>
      <Button 
        className='productCard__button--toCart' 
        variant='warning'
        onClick={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <strong>
          До кошику
        </strong>
      </Button>
    </Card.Text>
  );
};

