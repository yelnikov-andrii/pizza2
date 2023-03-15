import React from 'react';

export const CartTableHead = () => {

  return (
    <thead>
      <tr>
        <th className='cart__photo'>
          Фото
        </th>
        <th>
          Назва
        </th>
        <th className='cart__size'>
          Розмір
        </th>
        <th className='cart__souse'>
          Соус
        </th>
        <th className='cart__tablePrice'>
          Ціна
        </th>
        <th className='cart__quantity'>
          Кількість
        </th>
        <th>
          Сума
        </th>
      </tr>
    </thead>
  );
};

