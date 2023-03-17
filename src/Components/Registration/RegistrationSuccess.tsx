import React from 'react';
import { Container } from 'react-bootstrap';

export const RegistrationSuccess: React.FC = () => {

  return (
    <Container className='registration'>
      <h1 className='registration__title'>
        Реєстрація
      </h1>
      <p className='registration__success'>
        На вашу пошту було відправлене повідомлення з активаціонним посиланням
      </p>
    </Container>
  );
};

