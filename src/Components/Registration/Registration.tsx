import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { usePasswordHandler } from '../../hooks/usePasswordHandler';
import { useRegister } from '../../API/services/Auth/useRegister';
import { RegistrationSuccess } from './RegistrationSuccess';
import { RegistrationEmail } from './RegistrationEmail';
import { RegistrationPassword } from './RegistrationPassword';
import { RegistrationConfirmPassword } from './RegistrationConfirmPassword';
import { useCheckPasswords } from '../../hooks/useCheckPasswords';

export const Registration = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { passwordError, handlePassword } = usePasswordHandler(setPassword);
  const { register, emailErrorRequest, error } = useRegister(onSuccess);
  const { passwordIsValid } = useCheckPasswords(password, passwordIsDirty, passwordError, confirmPassword);

  function onSuccess() {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccess(true);
  }

  if (success) {
    return (
      <RegistrationSuccess />
    );
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
        <RegistrationEmail 
          email={email}
          setEmail={setEmail}
          emailErrorRequest={emailErrorRequest}
        />
        <RegistrationPassword 
          password={password}
          passwordError={passwordError}
          passwordIsDirty={passwordIsDirty}
          setPasswordIsDirty={setPasswordIsDirty}
          handlePassword={handlePassword}
        />
        <RegistrationConfirmPassword 
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          passwordError={passwordError}
        />
        <Button 
          variant="primary" 
          type="submit"
          disabled={!passwordIsValid}
        >
          Зареєструватися
        </Button>
      </Form>
      <p className='registration__error'>
        {error}
      </p>
    </Container>
  );
};
