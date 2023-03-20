import classNames from 'classnames';
import React, { Dispatch, SetStateAction } from 'react';
import Form from 'react-bootstrap/Form';
import { useEmailHandler } from '../../hooks/useEmailHandler';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  emailErrorRequest: string;
}

export const LoginEmail: React.FC <Props> = ({ email, setEmail, emailErrorRequest }) => {
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const {emailError, emailHandler} = useEmailHandler(setEmail);
  return (
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
        className={classNames('login__input', {
          'login__input--error': emailError || emailErrorRequest,
        })}
        required
        value={email}
        onBlur={() => {
          setEmailIsDirty(true);
        }}
        onChange={(e) => {
          emailHandler(e.target.value);
        }}
      />
    </Form.Group>
  );
};

