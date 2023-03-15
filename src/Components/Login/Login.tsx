import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';
import { url } from '../../data';

export const Login = () => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function login() {
    axios.post(`${url}/login`, {email, password}, {
      withCredentials: true
    })
      .then(response => {
        dispatch(setUser(response.data.user));
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/personal-account')
      })
      .catch((e: any) => {
        console.log(e);
        setError(e.response.data.message)
        if (e.response.data.errors.email) {
          setEmailError(e.response.data.errors.email)
        }

        if (e.response.data.errors.password) {
          setPasswordError(e.response.data.errors.password)
        }
      })
  }

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
        {emailError && emailIsDirty && (
          <p className='login__error'>
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
        controlId="formBasicPhone"
      >
        <Form.Label>
          Пароль
        </Form.Label>
        {passwordError && passwordIsDirty && (
          <p className='login__error'>
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

