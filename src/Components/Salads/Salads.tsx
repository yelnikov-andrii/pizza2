import React from 'react';
import { Salad } from './Salad';
import Container from 'react-bootstrap/Container';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../data';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';

export const Salads: React.FC <any> = () => {
  const [salads, loading , error]: any = useRequest(getSalads);

  function getSalads() {
    return axios.get(`${url}/salads`)
  }

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you salads, because {error}</h1>
      </Container>
    )
  }

  return (
    <>
      <Container>
      <h1 className='main__header'>
        Салати
      </h1>
      </Container>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
          <>
            <Container className='pizzas'>
            {salads && salads.map((salad: any) => (
              <Salad salad={salad} key={salad.id}/>
            ))}
          </Container>
          </>
      )}
    </>
  );
};

