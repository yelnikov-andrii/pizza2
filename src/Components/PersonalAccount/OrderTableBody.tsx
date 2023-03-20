import React from 'react';

export const OrderTableBody: React.FC <any> = ({initialProducts, products}) => {
  return (
    <tbody>
      {products && products.map((product: any, index: number) => (
        <tr 
          key={product.id.toString() + index.toString()}
        >
          <td className='cart__photo'>
            <img 
              src={product.img} 
              alt="" 
              className='cart__img'
            />
          </td>
          <td>
            {product.name}
          </td>
          <td className='cart__size'>
            {!initialProducts[index].hasOwnProperty('selectedSize') ? 
              '-' : initialProducts[index].selectedSize === 0 ? '32 см' : '42 см'}
          </td>
          <td className='cart__souse'>
            {initialProducts[index].selectedSouse || '-'}
          </td>
          <td className='cart__tablePrice'>
            {(product.prices && product.prices[initialProducts[index].selectedSize]) || product.price}
          </td>
          <td>
            {initialProducts[index].quantity}
          </td>
          <td>
            {(product.prices && initialProducts[index].quantity * product.prices[initialProducts[index].selectedSize]) 
            || product.price * initialProducts[index].quantity}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

