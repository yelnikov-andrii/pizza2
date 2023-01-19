import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { Loading } from '../../../UI/Loading/Loading';
import { url } from '../../../../data';
import { useRequest } from '../../../../hooks/useRequest';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct, incrementWithValue } from '../../../../redux/productsSlice';
import { useGetPrevProps } from '../../../../hooks/useGetPrevProps';


export const SushiCard = () => {
  const { sushiId } = useParams();
  const [sushi, loading, error]: any = useRequest(getSushiItem);
  const [quantity, setQuantity] = React.useState(1);
  const productsInCart = useSelector((state: any) => state.product.products);
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const prevShow = useGetPrevProps(show);

  React.useEffect(() => {
    let timerId;
    if (prevShow === true) {
      clearTimeout(timerId)
    } else {
      timerId = setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  function getSushiItem() {
    return axios.get(`${url}/sushi/${sushiId}`)
  }

  if (error) {
    return (
      <Container className='pizzaCard'>
        <h1>Error: we can not load pizza because {error}</h1>
      </Container>
    )
  }

  if (loading === true) {
    return (
      <Loading />
    )
  }

  return (
    <Container className='pizzaCard'>
      <Row>
        <Col md={6}>
          <img 
            src={sushi && sushi.img} 
            alt="" 
            className='pizzaCard__img'
          />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
        {sushi && (
          <Card>
            <Card.Body>
            <Card.Title>
            <h1>
              {sushi.name}
            </h1>
            </Card.Title>
            <Card.Text>
              Склад:
              <br />
              {sushi.components}
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
              {`${sushi.weight} г.`}
            </strong>
            <span className='pizza__txt'>
              {`(${sushi.count} шт.)`}
            </span>
          </Button>
        </Card.Text>
        <Card.Text >
          <strong className='pizzaCard__price'>
            {`${sushi.price} грн.`}
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
              const copySushi = JSON.parse(JSON.stringify(sushi));
              copySushi.quantity = quantity || 1;
              if (quantity === 0) {
                setQuantity(1);
              }
              setShow(true);
              if (productsInCart.some((product: any) => product.id === copySushi.id)) {
                const obj: any = {quantity, id: copySushi.id};
                dispatch(incrementWithValue(obj))
              } else {
                  dispatch(addProduct(copySushi));
                }
            }}
          >
            <strong>
              До кошику
            </strong>
          </Button>
        </Card.Text>
        <Alert className='pizza__alert' show={show}>
          Суші додані до кошику
        </Alert>
            </Card.Body>
          </Card>
        )}
        </Col>
      </Row>
    </Container>
  );
};



