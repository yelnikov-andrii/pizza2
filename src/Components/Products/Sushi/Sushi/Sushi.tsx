import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { url } from '../../../../data';
import { SushiItem } from './SushiItem';
import { TypeList } from '../../../UI/TypeList/TypeList';
import { useRequest } from '../../../../hooks/useRequest';
import { Loading } from '../../../UI/Loading/Loading';

export const Sushi: React.FC <any> = () => {
  const [filter, setFilter] = React.useState('Усі');
  const [sushi, loading, error]: any = useRequest(getSushi);

  function getSushi() {
    return axios.get(`${url}/sushi`)
  }

  const types = ['Усі', 'Суші-сети', 'Cуші', 'Гункани', 'Роли', 'Теплі Роли'];
  let filteredSushi = sushi;
  if (filter !== 'Усі') {
    filteredSushi = sushi.filter((item: any) => item.types.some((type: any) => type === filter));
  }

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you sushi, because {error}</h1>
      </Container>
    )
  }

  return (
    <Container className='main'>
      <h1 className='main__header'>Суші</h1>
      {loading ? (
        <Loading />
      ) : (
          <>
        <TypeList types={types} filterType={filter} setFilterType={setFilter} />
        <Container className='pizzas'>
          {filteredSushi && filteredSushi.map((sushiItem: any) => (
            <SushiItem sushiItem={sushiItem} key={sushiItem.id}/>
          ))}
        </Container>
          </>
      )}
      
    </Container>
  );
};

