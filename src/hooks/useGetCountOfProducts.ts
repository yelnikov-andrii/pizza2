import React from 'react';

export const useGetCountOfProducts = (productsInCart: any) => {
  const getCountOfProducts = () => {
    return productsInCart.reduce((initialValue: any, product: any) => initialValue + product.quantity, 0);
  }

  const countOfProducts = React.useMemo(() => {
    return getCountOfProducts();
  }, [productsInCart]);

  return countOfProducts;
}