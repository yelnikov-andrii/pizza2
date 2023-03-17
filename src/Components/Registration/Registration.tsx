import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../../API/index';

export const Registration = () => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [emailIsDirty, setEmailIsDirty] = React.useState(false)
  const [passwordIsValid, setPasswordIsValid] = React.useState(false);
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  function validateEmail(str: string) {
    if (!str) {
      return 'Email can not be empty'
    }
    if (regexEmail.test(str)) {
      return ''
  } else {
      return 'Email is not valid'
  }
  }

  const emailHandler = (str: string) => {
    setEmail(str);
    setEmailError(validateEmail(str));
  }

  function handlePassword(password: string) {
    if (!password) {
      setPasswordError('Password can not be empty')
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters')
    } else {
      setPasswordError('');
    }

    setPassword(password);
  }

  React.useEffect(() => {
    if (passwordIsDirty && !passwordError && confirmPassword === password) {
      setPasswordIsValid(true);
      return;
    }
  }, [confirmPassword]);

  if (success) {
    return (
      <Container className='registration'>
        <h1 className='registration__title'>
          Реєстрація
        </h1>
        <p className='registration__success'>
          На вашу пошту було відправлене повідомлення з активаціонним посиланням
        </p>
      </Container>
    )
  }

  function register({email, password}: any) {
    axios.post(`${url}/registration`, {email, password})
      .then(response => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setSuccess(true);
      })
      .catch((e) => {
        console.log(e)
        setError(e.response.data.message);
        if (e.response.data.errors.email) {
          setEmailError(e.response.data.errors.email)
        }
      })
  }

  return (
    <Container className='registration'>
      <h1 className='registration__title'>
        Реєстрація
      </h1>
      <Form 
        className="registration__form" 
        onSubmit={(e) => {
          e.preventDefault();
          register({email, password});
        }}
      >
      <Form.Group 
        className="mb-3" 
      >
        <Form.Label>
          Email
        </Form.Label>
        {emailError && emailIsDirty && (
          <p className='registration__error'>
            {emailError}
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
      >
        <Form.Label>
          Пароль
        </Form.Label>
        {passwordError && passwordIsDirty && (
          <p className='registration__error'>
            {passwordError}
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
            handlePassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
      >
        <Form.Label>
          Підтвердіть пароль
        </Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Підтвердіть пароль"
          required
          value={confirmPassword}
          disabled={passwordError ? true : false}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
        />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit"
        disabled={!passwordIsValid}
      >
        Зареєструватися
      </Button>
    </Form>
    <p>
      {error}
    </p>
    </Container>
  );
};



