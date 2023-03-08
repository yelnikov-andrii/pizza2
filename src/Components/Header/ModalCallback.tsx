import React, { Dispatch, SetStateAction} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>
}

export const ModalCallback: React.FC <Props> = ({setShow, show}) => {
  const handleClose = () => setShow(false);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');

  const sendInfo = (name: string, number: string) => {
    axios.post('https://apipizzas.onrender.com/calls', {name, number})
      .then(response => {
        console.log(response)
        setName('');
        setNumber('');
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
      <Modal 
        show={show} 
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Замовити дзвінок
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form 
          className="contactsForm" 
          onSubmit={(e) => {
            e.preventDefault();
            sendInfo(name, number);
            handleClose();
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
              type="phone"
              placeholder="Телефон"
              value={number}
              onChange={(e) => {
                if (!isNaN(+e.target.value)) {
                  setNumber(e.target.value);
                }
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
        </Modal.Body>
      </Modal>
  );
};

