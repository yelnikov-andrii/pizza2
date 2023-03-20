import React from 'react';
import { useSelector } from 'react-redux';

export const useGetCountOfProducts = () => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const getCountOfProducts = () => {
    return productsInCart.reduce((initialValue: any, product: any) => initialValue + product.quantity, 0);
  };

  const countOfProducts = React.useMemo(() => {
    return getCountOfProducts();
  }, [productsInCart]);

  return countOfProducts;
};
