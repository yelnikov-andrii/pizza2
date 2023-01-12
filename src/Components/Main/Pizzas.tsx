import React from 'react';
import { pizzasContext } from '../../App';
import { Pizza } from './Pizza';
import Container from 'react-bootstrap/Container';

export const Pizzas: React.FC <any> = ({filterType}) => {
  const {pizzas} = React.useContext<any>(pizzasContext);
  let filteredPizzas = pizzas;
  if (filterType !== 'Усі') {
    filteredPizzas = pizzas.filter((pizza: any) => pizza.types.includes(filterType));
  }
  return (
    <Container className='pizzas'>
      {filteredPizzas.map((pizza: any) => (
        <Pizza pizza={pizza} key={pizza.id}/>
      ))}
    </Container>
  );
};

