import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useLogin } from '../../API/services/Auth/useLogin';
import { LoginUnauthorized } from './LoginUnauthorized';
import { LoginEmail } from './LoginEmail';
import { LoginPassword } from './LoginPassword';

export const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login, error, emailErrorRequest, passwordErrorRequest } = useLogin({ email, password });

  return (
    <Container className='login'>
      <h1 className='login__title'>
        Увійти до особистого кабінету
      </h1>
      <Form 
        className="login__form" 
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <LoginEmail 
          email={email} 
          setEmail={setEmail} 
          emailErrorRequest={emailErrorRequest}
        />
        <LoginPassword 
          password={password}
          setPassword={setPassword}
          passwordErrorRequest={passwordErrorRequest}
        />
        <Button 
          variant="primary" 
          type="submit"
        >
          Увійти
        </Button>
      </Form>
      <LoginUnauthorized />
      <p className='login__error'>
        {error}
      </p>
    </Container>
  );
};

