import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { usePasswordHandler } from '../../hooks/usePasswordHandler';
import { useEmailHandler } from '../../hooks/useEmailHandler';
import { useRegister } from '../../API/services/Auth/useRegister';
import { RegistrationSuccess } from './RegistrationSuccess';

export const Registration = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [emailIsDirty, setEmailIsDirty] = React.useState(false)
  const [passwordIsValid, setPasswordIsValid] = React.useState(false);
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { passwordError, handlePassword } = usePasswordHandler(setPassword);
  const {emailError, emailHandler } = useEmailHandler(setEmail);
  const { register, emailErrorRequest, error } = useRegister(onSuccess);

  function onSuccess() {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccess(true);
  }

  React.useEffect(() => {
    if (passwordIsDirty && !passwordError && confirmPassword === password) {
      setPasswordIsValid(true);
      return;
    }
  }, [confirmPassword]);

  if (success) {
    return (
      <RegistrationSuccess />
    )
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
        {(emailError || emailErrorRequest) && emailIsDirty && (
          <p className='registration__error'>
            {emailError || email}
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
