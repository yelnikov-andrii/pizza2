import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const ModalCallback: React.FC <any> = ({setShow, show}) => {
  const handleClose = () => setShow(false);

  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Замовити дзвінок</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="contactsForm" onSubmit={(e) => {
          e.preventDefault();
          handleClose();
        }}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Ім'я</Form.Label>
            <Form.Control type="text" placeholder="Ім'я" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Телефон</Form.Label>
            <Form.Control type="text" placeholder="Телефон" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Відправити
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
  );
};

