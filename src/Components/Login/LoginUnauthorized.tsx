import React from 'react';
import { Link } from 'react-router-dom';

export const LoginUnauthorized = () => {
  return (
    <div className='login__unauthorized'>
      <p>
        Не зареєстровані?
      </p>
      <Link to="/registration">
        Зареєструватися
      </Link>
    </div>
  );
};

