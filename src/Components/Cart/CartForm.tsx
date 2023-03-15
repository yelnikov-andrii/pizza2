import axios from 'axios';
import React, {Dispatch, SetStateAction} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { url } from '../../data';
import { clearCart } from '../../redux/productsSlice';

interface Props {
  setFilled: Dispatch<SetStateAction<boolean>>;
}

export const CartForm: React.FC <Props> = ({setFilled}) => {
  const[name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  const productsInCart = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const normalizedProducts = productsInCart.map((product: any) => {
    const {id, selectedSize, name, selectedSouse, quantity} = product;
    return {id, name, selectedSize, selectedSouse, quantity}
  });
  const products = JSON.stringify(normalizedProducts);

  function sendOrder() {
    axios.post(`${url}/orders`, {name, phone, address, products, email: user.email || null })
      .then(response => {
        console.log(response);
        setName('');
        setPhone('');
        setAddress('');
        setFilled(true);
        localStorage.setItem('productsInCart', '');
        dispatch(clearCart());
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <Form 
      className='cartForm' 
      onSubmit={(e) => {
        e.preventDefault();
        sendOrder();
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
          required
          placeholder="Телефон" 
          value={phone} 
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
        controlId="formBasicAddress"
      >
        <Form.Label>
          Адреса
        </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Адреса"
          required
          value={address} 
          onChange={(e) => {
            setAddress(e.target.value);
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

