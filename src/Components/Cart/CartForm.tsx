import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CartForm: React.FC <any> = ({setFilled}) => {
  const[name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  return (
    <Form className='cartForm' onSubmit={(e) => {
      e.preventDefault();
      if (name && phone && address) {
        setFilled(true);
        setName('');
        setPhone('');
        setAddress('');
      }
    }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Ім'я</Form.Label>
        <Form.Control type="text" placeholder="Ім'я" value={name} onChange={(e) => {
          setName(e.target.value);
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Телефон</Form.Label>
        <Form.Control type="text" placeholder="Телефон" value={phone} onChange={(e) => {
          setPhone(e.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Адреса</Form.Label>
        <Form.Control type="text" placeholder="Адреса" value={address} onChange={(e) => {
          setAddress(e.target.value);
        }}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Відправити
      </Button>
    </Form>
  );
};

