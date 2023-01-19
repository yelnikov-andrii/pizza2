import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { LoadingCard } from '../../../UI/LoadingCard/LoadingCard';
import { url } from '../../../../data';
import { useRequest } from '../../../../hooks/useRequest';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct, incrementWithValue } from '../../../../redux/productsSlice';


export const SnackCard = () => {
  const { snackId } = useParams();
  const [snack, loading, error]: any = useRequest(getSnack);
  const [quantity, setQuantity] = React.useState(1);
  const productsInCart = useSelector((state: any) => state.product.products);
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  function getSnack() {
    return axios.get(`${url}/snacks/${snackId}`)
  }

  if (error) {
    return (
      <Container className='pizzaCard'>
        <h1>Error: we can not load snack because {error}</h1>
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
            src={snack && snack.img} 
            alt="" 
            className='pizzaCard__img'
          />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
        {snack && (
          <Card>
            <Card.Body>
            <Card.Title>
            <h1>
              {snack.name}
            </h1>
            </Card.Title>
            <Card.Text>
              Склад:
              <br />
              {snack.components}
            </Card.Text>
            <Card.Text>
          {snack.weight > 0 && (
            <Button 
            variant="outline-warning" 
            size="lg"
            active
            className="pizza__button"
          >
            <strong
              className="pizza__txtStrong"
            >
              {`${snack.weight} г.`}
            </strong>
          </Button>
          )}
          {snack.count > 0 && (
            <Button 
            variant="outline-warning" 
            size="lg"
            className='pizza__button'
            active
          >
          <strong className='pizza__txtStrong'>
            {`${snack.count} шт.`}
          </strong>
          </Button>
          )}
        </Card.Text>
        <Card.Text >
          <strong className='pizzaCard__price'>
            {`${snack.price} грн.`}
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
              const copySnack = JSON.parse(JSON.stringify(snack));
              copySnack.quantity = quantity || 1;
              if (quantity === 0) {
                setQuantity(1);
              }
              setShow(true);
              if (productsInCart.some((snack: any) => snack.id === copySnack.id)) {
                const obj: any = {quantity, id: copySnack.id};
                dispatch(incrementWithValue(obj))
              } else {
                  dispatch(addProduct(copySnack));
                }
            }}
          >
            <strong>
              До кошику
            </strong>
          </Button>
        </Card.Text>
        <Alert className='pizza__alert' show={show}>
          Закуска додана до кошику
        </Alert>
            </Card.Body>
          </Card>
        )}
        </Col>
      </Row>
    </Container>
  );
};


