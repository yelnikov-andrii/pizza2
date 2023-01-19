import React from 'react';
import { Snack } from './Snack';
import Container from 'react-bootstrap/Container';
import { TypeList } from '../../../UI/TypeList/TypeList';
import { useRequest } from '../../../../hooks/useRequest';
import { url } from '../../../../data';
import axios from 'axios';
import { Loading } from '../../../UI/Loading/Loading';

export const Snacks: React.FC <any> = () => {
  const [snacks, loading , error]: any = useRequest(getSnacks);
  const [filterType, setFilterType] = React.useState('Усі');
  const types = ['Усі', 'Холодні закуски', 'До пива',];
  let filteredSnacks = snacks;

  function getSnacks() {
    return axios.get(`${url}/snacks`)
  }


  if (filterType !== 'Усі') {
    filteredSnacks = snacks.filter((snack: any) => snack.types.includes(filterType));
  }

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you snacks, because {error}</h1>
      </Container>
    )
  }

  return (
    <>
      <Container>
      <h1 className='main__header'>
        Закуски
      </h1>
      </Container>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
          <>
            <Container>
            <TypeList filterType={filterType} setFilterType={setFilterType} types={types}/>
            </Container>
            <Container className='pizzas'>
            {filteredSnacks && filteredSnacks.map((snack: any) => (
              <Snack snack={snack} key={snack.id}/>
            ))}
          </Container>
          </>
      )}
    </>
  );
};

