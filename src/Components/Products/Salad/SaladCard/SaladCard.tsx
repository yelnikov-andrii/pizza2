import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { url } from '../../../../data';
import { useRequest } from '../../../../hooks/useRequest';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct, incrementWithValue } from '../../../../redux/productsSlice';
import { LoadingCard } from '../../../UI/LoadingCard/LoadingCard';


export const SaladCard = () => {
  const { saladId } = useParams();
  const [salad, loading, error]: any = useRequest(getSalad);
  const [quantity, setQuantity] = React.useState(1);
  const productsInCart = useSelector((state: any) => state.product.products);
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  function getSalad() {
    return axios.get(`${url}/salads/${saladId}`)
  }

  if (error) {
    return (
      <Container className='pizzaCard'>
        <h1>Error: we can not load salad because {error}</h1>
      </Container>
    )
  }

  if (loading === true) {
    return (
      <LoadingCard />
    )
  }

  return (
    <Container className='pizzaCard'>
      <Row>
        <Col md={6}>
          <img 
            src={salad && salad.img} 
            alt="" 
            className='pizzaCard__img'
          />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
        {salad && (
          <Card>
            <Card.Body>
            <Card.Title>
            <h1>
              {salad.name}
            </h1>
            </Card.Title>
            <Card.Text>
              Склад:
              <br />
              {salad.components}
            </Card.Text>
            <Card.Text>
        </Card.Text>
        <Card.Text>
          <Button 
            variant="outline-warning" 
            size="sm"
            active
            className="pizza__button"
          >
            <strong
              className="pizza__txtStrong"
            >
              {`${salad.weight} г.`}
            </strong>
          </Button>
        </Card.Text>
        <Card.Text >
          <strong className='pizzaCard__price'>
            {`${salad.price} грн.`}
          </strong>
        </Card.Text>
        <Card.Text className='pizzaCard__counter'>
          <button
            className='pizzaCard__button'
            onClick={(e) => {
              e.preventDefault();
              if (quantity > 0) {
                setQuantity(prev => prev - 1);
              }
            }}
          >
            -
          </button>
          <input 
            className='pizzaCard__input'
            value={quantity}
            onChange={(e) => {
              if (isNaN(+e.target.value) || +e.target.value < 0) {
                return;
              }
              setQuantity(+e.target.value);
            }}
          />
          <button 
            className='pizzaCard__button'
            onClick={(e) => {
              e.preventDefault();
              setQuantity(prev => prev + 1);
            }}
          >
            +
          </button>
          <Button 
            className='pizzaCard__button--toCart' 
            variant='warning'
            onClick={(e) => {
              e.preventDefault();
              const copySalad = JSON.parse(JSON.stringify(salad));
              copySalad.quantity = quantity || 1;
              if (quantity === 0) {
                setQuantity(1);
              }
              setShow(true);
              if (productsInCart.some((product: any) => product.id === copySalad.id)) {
                const obj: any = {quantity, id: copySalad.id};
                dispatch(incrementWithValue(obj))
              } else {
                  dispatch(addProduct(copySalad));
                }
            }}
          >
            <strong>
              До кошику
            </strong>
          </Button>
        </Card.Text>
        <Alert className='pizza__alert' show={show}>
          Шаурма додана до кошику
        </Alert>
            </Card.Body>
          </Card>
        )}
        </Col>
      </Row>
    </Container>
  );
};



