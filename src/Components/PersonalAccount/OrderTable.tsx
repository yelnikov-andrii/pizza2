import React from 'react';
import Table from 'react-bootstrap/Table';
import { OrderTableBody } from './OrderTableBody';
import { OrderTableHead } from './OrderTableHead';

export const OrderTable: React.FC <any> = ({ initialProducts, products }) => {
  return (
    <Table 
      striped 
      bordered 
      hover
    >
      <OrderTableHead />
      <OrderTableBody 
        initialProducts={initialProducts}
        products={products}
      />
    </Table>
  );
};

