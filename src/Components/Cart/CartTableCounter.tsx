import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, removeProduct } from '../../redux/productsSlice';

export const CartTableCounter: React.FC <any> = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className='cart__quantity'>
      <button
        className='cart__button'
        onClick={(e) => {
          e.preventDefault();
          if (product.quantity === 1) {
            dispatch(removeProduct(product.id));
          } else {
            dispatch(decrement(product.id));
          }
        }}
      >
        -
      </button>
      <span>
        {product.quantity}
      </span>
      <button 
        className='cart__button'
        onClick={(e) => {
          e.preventDefault();
          dispatch(increment(product.id));
        }}
      >
        +
      </button>
    </div>
  );
};

