import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEmailHandler } from '../../hooks/useEmailHandler';
import { usePasswordHandler } from '../../hooks/usePasswordHandler';
import { useLogin } from '../../API/services/Auth/useLogin';

export const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const {emailError, emailHandler} = useEmailHandler(setEmail);
  const { passwordError, handlePassword } = usePasswordHandler(setPassword);
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
          login()
        }}
      >
      <Form.Group 
        className="mb-3" 
        controlId="formBasicName"
      >
        <Form.Label>
          Email
        </Form.Label>
        {(emailError || emailErrorRequest) && emailIsDirty && (
          <p className='login__error'>
            {emailError || emailErrorRequest }
          </p>
        )}
        <Form.Control 
          type="email" 
          placeholder="Email"
          required
          value={email}
          onBlur={() => {
            setEmailIsDirty(true)
          }}
          onChange={(e) => {
            emailHandler(e.target.value)
          }}
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
        controlId="formBasicPhone"
      >
        <Form.Label>
          Пароль
        </Form.Label>
        {(passwordError || passwordErrorRequest) && passwordIsDirty && (
          <p className='login__error'>
            {passwordError || passwordErrorRequest}
          </p>
        )}
        <Form.Control 
          type="password" 
          placeholder="Пароль"
          required
          value={password}
          onBlur={() => {
            setPasswordIsDirty(true)
          }}
          onChange={(e) => {
            handlePassword(e.target.value)
          }}
        />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit"
      >
        Увійти
      </Button>
    </Form>
    <div className='login__unauthorized'>
      <p>
        Не зареєстровані?
      </p>
      <Link to="/registration">
        Зареєструватися
      </Link>
    </div>
    <p>
      {error}
    </p>
    </Container>
  );
};

