import React, { Dispatch, SetStateAction } from 'react';
import Form from 'react-bootstrap/Form';
import { useEmailHandler } from '../../hooks/useEmailHandler';
import classNames from 'classnames';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  emailErrorRequest: string;
}

export const RegistrationEmail: React.FC <Props> = ({email, setEmail, emailErrorRequest}) => {
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const {emailError, emailHandler } = useEmailHandler(setEmail);
  return (
    <Form.Group 
      className="mb-3" 
    >
      <Form.Label>
        Email
      </Form.Label>
      {(emailError || emailErrorRequest) && emailIsDirty && (
        <p className='registration__error'>
          {emailError || emailErrorRequest}
        </p>
      )}
      <Form.Control 
        type="email" 
        placeholder="Email"
        required
        value={email}
        className={classNames('registration__input', {
          'registration__input--error': emailError || emailErrorRequest,
        })}
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

