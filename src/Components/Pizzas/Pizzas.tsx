import React from 'react';
import { Pizza } from './Pizza';
import Container from 'react-bootstrap/Container';
import { TypeList } from '../UI/TypeList/TypeList';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../data';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';

export const Pizzas: React.FC <any> = () => {
  const [pizzas, loading , error]: any = useRequest(getPizzas);
  const [filterType, setFilterType] = React.useState('Усі');
  const pizzaTypes = ['Усі', 'Сирні', 'М\'ясні', 'Овочеві', 'Фірмові', 'Морські'];
  let filteredPizzas = pizzas;

  function getPizzas() {
    return axios.get(`${url}/pizzas`)
  }


  if (filterType !== 'Усі') {
    filteredPizzas = pizzas.filter((pizza: any) => pizza.types.includes(filterType));
  }

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you pizzas, because {error}</h1>
      </Container>
    )
  }

  return (
    <>
      <Container>
      <h1 className='main__header'>
        Піца
      </h1>
      </Container>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
          <>
            <Container>
            <TypeList filterType={filterType} setFilterType={setFilterType} types={pizzaTypes}/>
            </Container>
            <Container className='pizzas'>
            {filteredPizzas && filteredPizzas.map((pizza: any) => (
              <Pizza pizza={pizza} key={pizza.id}/>
            ))}
          </Container>
          </>
      )}
    </>
  );
};

