import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useAddProduct } from '../../../hooks/useAddProduct';

interface Props {
  product: any;
  selectedSize: number;
  selectedSouse: number;
  showAlert: () => void;
}

export const ProductButtonAdd: React.FC <Props> = ({ product, selectedSize, selectedSouse, showAlert }) => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const { add } = useAddProduct(product, selectedSize, selectedSouse, showAlert, productsInCart, 1, false);

  return (
    <Button
      variant="outline-warning"
      className='product__button--fullWidth'
      onClick={(e) => {
        e.preventDefault();
        add();
      }}
    >
      До кошику
    </Button>
  );
};

