import React from 'react';

export const useGetSum = (productsInCart: any, initialProducts: any = []) => {
  const sum = React.useMemo(() => {
    if (initialProducts.length === 0) {
      return productsInCart.reduce((initialValue: any, product: any) => initialValue 
      + ((product.prices && product.quantity * product.prices[product.selectedSize]) 
      || product.quantity * product.price), 0);
    } else {
      return productsInCart.reduce((initialValue: any, product: any, index: number) => initialValue 
      + ((product.prices && initialProducts[index].quantity 
        * product.prices[initialProducts[index].selectedSize]) || initialProducts[index].quantity * product.price), 0);
    }
    
  }, [productsInCart]);

  return { sum };
};
