import React, {Dispatch, SetStateAction} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEmailHandler } from '../../hooks/useEmailHandler';
import { useSendData } from '../../hooks/useSendData';
import { url } from '../../API';

interface Props {
  setFormIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

export const ContactsForm: React.FC <Props> = ({ setFormIsSubmitted }) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const {emailError, emailHandler} = useEmailHandler(setEmail);
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const { sendData } = useSendData();

  function submit() {
    setName('');
    setNumber('');
    setEmail('');
    setMessage('');
    setFormIsSubmitted(true);
  }

  return (
    <Form 
      className="contactsForm" 
      onSubmit={(e) => {
        e.preventDefault();
        sendData({name, number, email, message}, `${url}/feedback`, submit);
      }}
    >
      <Form.Group 
        className="mb-3" 
        controlId="formBasicName"
      >
        <Form.Label>
          Ім'я
        </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ім'я"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
        controlId="formBasicPhone"
      >
        <Form.Label>
          Телефон
        </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Телефон"
          required
          value={number}
          onChange={(e) => {
            if (!isNaN(+e.target.value)) {
              setNumber(e.target.value);
            }
          }}
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
        controlId="formBasicEmail"
      >
        <Form.Label>
          Ваш Email
          {emailIsDirty && emailError && (
            <p className="contactsForm__emailErrortxt">
              {emailError}
            </p>
          )}
        </Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            emailHandler(e.target.value);
          }}
          onBlur={() => {
            setEmailIsDirty(true);
          }}
          className={(emailError && emailIsDirty) ? 'contactsForm__emailErrorInput' : ''}
        />
      </Form.Group>
      <Form.Group className="contactsForm__textarea">
        <Form.Label>
          Повідомлення
        </Form.Label>
        <Form.Control 
          as="textarea" 
          aria-label="With textarea"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit"
      >
        Відправити
      </Button>
    </Form>
  );
};
