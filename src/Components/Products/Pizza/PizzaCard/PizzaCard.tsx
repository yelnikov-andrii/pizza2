import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import { Alert } from 'react-bootstrap';
import { LoadingCard } from '../../../UI/LoadingCard/LoadingCard';
import { url } from '../../../../data';
import { useRequest } from '../../../../hooks/useRequest';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct, incrementWithValue } from '../../../../redux/productsSlice';


export const PizzaCard = () => {
  const { pizzaId } = useParams();
  const [pizza, loading, error]: any = useRequest(getPizza);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [selectedSouse, setSelectedSouse] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const productsInCart = useSelector((state: any) => state.product.products);
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  function getPizza() {
    return axios.get(`${url}/pizzas/${pizzaId}`)
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
      <LoadingCard />
    )
  }

  return (
    <Container className='pizzaCard'>
      <Row>
        <Col md={6}>
          <img 
            src={pizza && pizza.img} 
            alt="" 
            className='pizzaCard__img'
          />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
        {pizza && (
          <Card>
            <Card.Body>
            <Card.Title>
            <h1>
              {pizza.name}
            </h1>
            </Card.Title>
            <Card.Text>
              Склад:
              <br />
              {pizza.components}
            </Card.Text>
            <Card.Text>
          <Button 
            variant="outline-warning" 
            size="lg"
            active={selectedSize === 0 ? true : false}
            className="pizza__button"
            onClick={(e) => {
              e.preventDefault();
              setSelectedSize(0)
            }}
          >
            <strong
              className="pizza__txtStrong"
            >
              32 см
            </strong>
            <span className='pizza__txt'>
              {`(${pizza.sizes[0]} г.)`}
            </span>
          </Button>
          <Button 
            variant="outline-warning" 
            size="lg"
            className='pizza__button'
            active={selectedSize === 1 ? true : false}
            onClick={(e) => {
              e.preventDefault();
              setSelectedSize(1)
            }}
          >
          <strong className='pizza__txtStrong'>
            42 см
          </strong>
            <span className='pizza__txt'>
              {`(${pizza.sizes[1]} г.)`}
            </span>
          </Button>
        </Card.Text>
        <Card.Text>
          <Button
            variant="outline-warning"
            size="lg"
            active={selectedSouse === 0 ? true : false}
            className={classnames('pizza__button', {
              "pizza__button--hidden": pizza.souses.length === 0
            })}
            onClick={(e) => {
              e.preventDefault();
              setSelectedSouse(0);
            }}
          >
            <strong className='pizza__txtStrong'>
              {pizza.souses[0]}
            </strong>
          </Button>
          {pizza.souses.length === 2 && (
            <Button 
              variant="outline-warning" 
              size="lg" 
              className='pizza__button' 
              onClick={(e) => {
                e.preventDefault();
                setSelectedSouse(1);
              }}
              active={selectedSouse === 1 ? true : false}
            >
            <strong className='pizza__txtStrong'>
              {pizza.souses[1]}
            </strong>
            </Button>
          )}
        </Card.Text>
        <Card.Text >
          <strong className='pizzaCard__price'>
            {`${pizza.prices[selectedSize]} грн.`}
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
              const copyPizza = JSON.parse(JSON.stringify(pizza));
              copyPizza.selectedSize = selectedSize;
              copyPizza.selectedSouse = copyPizza.souses[selectedSouse];
              copyPizza.id += selectedSize.toString() + selectedSouse;
              copyPizza.quantity = quantity || 1;
              if (quantity === 0) {
                setQuantity(1);
              }
              setShow(true);
              if (productsInCart.some((pizza: any) => pizza.id === copyPizza.id)) {
                const obj: any = {quantity, id: copyPizza.id};
                dispatch(incrementWithValue(obj))
              } else {
                  dispatch(addProduct(copyPizza));
                }
            }}
          >
            <strong>
              До кошику
            </strong>
          </Button>
        </Card.Text>
        <Alert className='pizza__alert' show={show}>
          Піца додана до кошику
        </Alert>
            </Card.Body>
          </Card>
        )}
        </Col>
      </Row>
    </Container>
  );
};


