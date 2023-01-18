import React from 'react';
import { MangalItem } from './MangalItem';
import Container from 'react-bootstrap/Container';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../data';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';

export const Mangal: React.FC <any> = () => {
  const [mangals, loading , error]: any = useRequest(getMangals);

  function getMangals() {
    return axios.get(`${url}/mangal`)
  }

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you mangal, because {error}</h1>
      </Container>
    )
  }

  return (
    <>
      <Container>
        <h1 className='main__header'>
          Мангал
        </h1>
      </Container>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
          <>
            <Container className='pizzas'>
              {mangals && mangals.map((mangal: any) => (
                <MangalItem 
                  mangal={mangal} 
                  key={mangal.id}
                />
              ))}
          </Container>
          </>
      )}
    </>
  );
};

