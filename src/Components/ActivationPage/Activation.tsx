import React from 'react';
import { Container } from 'react-bootstrap';
import { useActivate } from '../../API/services/Auth/useActivate';

export const Activation: React.FC = () => {
  const {isActivated, checked, checking} = useActivate();

  if (checking) {
    return (
      <Container className='activation'>
        <h2>
          Loading...
        </h2>
      </Container>
    )
  } else {
    return (
      <Container className='activation'>
        {checked && isActivated ? (
          <h4>
            Акаунт успішно активований
          </h4>
        ) : (
          <h4>
            Користувач вже зареєстрований, або посилання помилкове
          </h4>
        )}
      </Container>
    );
  }
};

