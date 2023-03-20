import React, { Dispatch, SetStateAction } from 'react';
import Form from 'react-bootstrap/Form';

interface Props {
  password: string;
  passwordError: string;
  passwordIsDirty: boolean;
  setPasswordIsDirty: Dispatch<SetStateAction<boolean>>;
  handlePassword: (str: string) => void;
}

export const RegistrationPassword: React.FC <Props> = ({
  password, passwordError, passwordIsDirty, setPasswordIsDirty, handlePassword}) => {
  return (
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
          setPasswordIsDirty(true);
        }}
        onChange={(e) => {
          handlePassword(e.target.value);
        }}
      />
    </Form.Group>
  );
};

