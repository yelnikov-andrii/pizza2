import React from 'react';
import { Soupe } from './Soupe';
import Container from 'react-bootstrap/Container';
import { TypeList } from '../UI/TypeList/TypeList';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../data';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';

export const Soupes: React.FC <any> = () => {
  const [soupes, loading , error]: any = useRequest(getSoupes);
  const [filterType, setFilterType] = React.useState('Усі');
  const types = ['Усі', 'Японські супи', 'Перші страви',];
  let filteredSnacks = soupes;

  function getSoupes() {
    return axios.get(`${url}/soupes`)
  }


  if (filterType !== 'Усі') {
    filteredSnacks = soupes.filter((soupe: any) => soupe.types.includes(filterType));
  }

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you soupes, because {error}</h1>
      </Container>
    )
  }

  return (
    <>
      <Container>
      <h1 className='main__header'>
        Супи
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
            {filteredSnacks && filteredSnacks.map((soupe: any) => (
              <Soupe soupe={soupe} key={soupe.id}/>
            ))}
          </Container>
          </>
      )}
    </>
  );
};

