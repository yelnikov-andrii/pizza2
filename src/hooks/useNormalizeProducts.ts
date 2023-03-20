import React from 'react';

export const useNormalizeProducts = (products: any) => {
  const normalizedProducts = React.useMemo(() => {
    return products.map((product: any) => {
      const {id, selectedSize, name, selectedSouse, quantity} = product;
      return {id, name, selectedSize, selectedSouse, quantity};
    });
  }, [products]);
  const strProducts = JSON.stringify(normalizedProducts);
  return strProducts;
};
