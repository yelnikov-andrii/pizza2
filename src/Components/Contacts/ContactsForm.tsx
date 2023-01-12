import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ContactsForm: React.FC <any> = ({setFormIsSubmitted}) => {
  return (
    <Form className="contactsForm" onSubmit={(e) => {
      e.preventDefault();
      setFormIsSubmitted(true);
    }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Ім'я</Form.Label>
        <Form.Control type="text" placeholder="Ім'я" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Телефон</Form.Label>
        <Form.Control type="text" placeholder="Телефон" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ваш Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="contactsForm__textarea">
      <Form.Label>Повідомлення</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Відправити
      </Button>
    </Form>
  );
}