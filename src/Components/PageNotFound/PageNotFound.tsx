import React from 'react';
import { Container } from 'react-bootstrap';

export const PageNotFound = () => {

  return (
    <Container className='pageNotFound'>
      <h1 className='pageNotFound__title'>
        Сторінка не знайдена, ти заблукав, або я наверстав щось не те
      </h1>
    </Container>
  );
};
