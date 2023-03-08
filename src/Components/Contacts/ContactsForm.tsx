import axios from "axios";
import React, {Dispatch, SetStateAction} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Props {
  setFormIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

export const ContactsForm: React.FC <Props> = ({setFormIsSubmitted}) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  function validateEmail(str: string) {
    if (regexEmail.test(str)) {
      return ''
  } else {
      return 'Email is not valid'
  }
  }

  const emailHandler = (str: string) => {
    setEmail(str);
    let error = '';

    if (str) {
      error = validateEmail(str);
    } 

    if (error) {
      setEmailError(error)
    } else {
      setEmailError('')
    }
  }

  function sendData(name: string, number: string, email: string, message: string) {
    axios.post('https://apipizzas.onrender.com/feedback', {name, number, email, message})
      .then(response => {
        console.log(response);
        setName('');
        setNumber('');
        setEmail('');
        setMessage('');
        setFormIsSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      })
  }

  return (
    <Form 
      className="contactsForm" 
      onSubmit={(e) => {
        e.preventDefault();
        sendData(name, number, email, message)
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
            setName(e.target.value)
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
          {emailError && (
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
            emailHandler(e.target.value)
          }}
          className={emailError ? "contactsForm__emailErrorInput": ''}
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
            setMessage(e.target.value)
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
}