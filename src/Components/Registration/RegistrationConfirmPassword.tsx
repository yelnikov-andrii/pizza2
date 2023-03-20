import React, { Dispatch, SetStateAction } from 'react';
import Form from 'react-bootstrap/Form';

interface Props {
  confirmPassword: string;
  passwordError: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

export const RegistrationConfirmPassword: React.FC <Props> = (
  {confirmPassword, passwordError, setConfirmPassword }) => {
  return (
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
          setConfirmPassword(e.target.value);
        }}
      />
    </Form.Group>
  );
};

