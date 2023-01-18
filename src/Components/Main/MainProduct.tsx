import React from 'react';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Loading } from '../UI/Loading/Loading';

export const MainProduct: React.FC <any> = ({categoryName, categoryLink, loading, error, children}) => {

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you products, because {error}</h1>
      </Container>
    )
  }

  return (
    <Container className='mainProduct'>
      <Container>
        {loading ? (
          <Container>
            <Loading />
          </Container>
        ) :  (
          <>
          <LinkContainer to={categoryLink}>
        <h2 className='main__header'>
          {categoryName}
        </h2>
        </LinkContainer>
        <Container className='pizzas'>
          {children}
        </Container>
          </>
        )}
        </Container>
      </Container>
  );
};

