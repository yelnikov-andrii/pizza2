import React from 'react';
import { Shaurma } from './Shaurma';
import Container from 'react-bootstrap/Container';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../data';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';

export const Shaurmas: React.FC <any> = () => {
  const [shaurmas, loading , error]: any = useRequest(getShaurmas);

  function getShaurmas() {
    return axios.get(`${url}/shaurma`)
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
        Шаурма
      </h1>
      </Container>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
          <>
            <Container className='pizzas'>
            {shaurmas && shaurmas.map((shaurma: any) => (
              <Shaurma shaurma={shaurma} key={shaurma.id}/>
            ))}
          </Container>
          </>
      )}
    </>
  );
};

