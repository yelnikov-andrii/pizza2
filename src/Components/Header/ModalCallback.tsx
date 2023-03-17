import React, { Dispatch, SetStateAction} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSendData } from '../../hooks/useSendData';
import { url } from '../../API';
import { useChangeBooleanWithTimeSpan } from '../../hooks/useChangeBooleaWithTimespan';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>
}

export const ModalCallback: React.FC <Props> = ({setShow, show}) => {
  const handleClose = () => setShow(false);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const { sendData } = useSendData();
  const [sent, setSent]: any = useChangeBooleanWithTimeSpan(false, false, 3000);

  function clearForm() {
    setName('');
    setNumber('');
    setSent(true);
    setTimeout(() => {
      handleClose()
    }, 3000);
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
        {!sent ? (
          <Form 
          className="contactsForm"
          onSubmit={(e) => {
            e.preventDefault();
            sendData({name, number}, `${url}/calls`, clearForm);
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
        ): (
          <div className='contactsForm'>
            Ми зателефонуємо вам невдовзі, мабуть
          </div>
        )}
        </Modal.Body>
      </Modal>
  );
};

