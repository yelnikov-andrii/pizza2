import React from 'react';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
  categoryName: string;
  categoryLink: string;
  error: string;
  children: any
}

export const MainProduct: React.FC <Props> = ({categoryName, categoryLink, error, children}) => {

  if (error) {
    return (
      <Container className='main'>
        <h1>Не можемо завантажити продукти. Помилка: {error}</h1>
      </Container>
    );
  }

  return (
    <Container className='mainProduct'>
      <LinkContainer to={categoryLink}>
        <h2 className='main__header'>
          {categoryName}
        </h2>
      </LinkContainer>
      <Container className='products'>
        {children}
      </Container>
    </Container>
  );
};

