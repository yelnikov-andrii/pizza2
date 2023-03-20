import React from 'react';
import Table from 'react-bootstrap/Table';
import { CartTableBody } from './CartTableBody';
import { CartTableHead } from './CartTableHead';

export const CartTable: React.FC = () => {
  return (
    <Table 
      striped 
      bordered 
      hover
    >
      <CartTableHead />
      <CartTableBody />
    </Table>
  );
};

