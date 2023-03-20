import React from 'react';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Loading } from '../UI/Loading/Loading';

interface Props {
  categoryName: string;
  categoryLink: string;
  loading: boolean;
  error: string;
  children: any
}

export const MainProduct: React.FC <Props> = ({categoryName, categoryLink, loading, error, children}) => {

  if (error) {
    return (
      <Container className='main'>
        <h1>Не можемо завантажити продукти. Помилка: {error}</h1>
      </Container>
    );
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
            <Container className='products'>
              {children}
            </Container>
          </>
        )}
      </Container>
    </Container>
  );
};

