import classNames from 'classnames';
import React, { Dispatch, SetStateAction } from 'react';
import Form from 'react-bootstrap/Form';
import { usePasswordHandler } from '../../hooks/usePasswordHandler';

interface Props {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  passwordErrorRequest: string;
}

export const LoginPassword: React.FC <Props> = ({ password, setPassword, passwordErrorRequest }) => {
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const { passwordError, handlePassword } = usePasswordHandler(setPassword);
  return (
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
        className={classNames('login__input', {
          'login__input--error': passwordError || passwordErrorRequest,
        })}
        required
        value={password}
        onBlur={() => {
          setPasswordIsDirty(true);
        }}
        onChange={(e) => {
          handlePassword(e.target.value);
        }}
      />
    </Form.Group>
  );
};

