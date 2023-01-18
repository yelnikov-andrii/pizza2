import React, {Dispatch, SetStateAction} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Props {
  setFormIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

export const ContactsForm: React.FC <Props> = ({setFormIsSubmitted}) => {
  return (
    <Form 
      className="contactsForm" 
      onSubmit={(e) => {
        e.preventDefault();
        setFormIsSubmitted(true);
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
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
        controlId="formBasicEmail"
      >
        <Form.Label>
          Ваш Email
        </Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
        />
      </Form.Group>
      <Form.Group className="contactsForm__textarea">
      <Form.Label>
        Повідомлення
      </Form.Label>
        <Form.Control 
          as="textarea" 
          aria-label="With textarea" 
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