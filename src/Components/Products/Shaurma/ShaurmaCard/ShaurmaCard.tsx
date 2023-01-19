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
import classnames from 'classnames';
import { LoadingCard } from '../../../UI/LoadingCard/LoadingCard';
import { useGetPrevProps } from '../../../../hooks/useGetPrevProps';


export const ShaurmaCard = () => {
  const { shaurmaId } = useParams();
  const [shaurma, loading, error]: any = useRequest(getShaurmaItem);
  const [selectedSouse, setSelectedSouse] = React.useState(0);
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

  function getShaurmaItem() {
    return axios.get(`${url}/shaurma/${shaurmaId}`)
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
            src={shaurma && shaurma.img} 
            alt="" 
            className='pizzaCard__img'
          />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
        {shaurma && (
          <Card>
            <Card.Body>
            <Card.Title>
            <h1>
              {shaurma.name}
            </h1>
            </Card.Title>
            <Card.Text>
              Склад:
              <br />
              {shaurma.components}
            </Card.Text>
            <Card.Text>
        </Card.Text>
        <Card.Text>
          <Button
            variant="outline-warning"
            size="lg"
            active={selectedSouse === 0 ? true : false}
            className={classnames('pizza__button', {
              "pizza__button--hidden": shaurma.souses.length === 0
            })}
            onClick={(e) => {
              e.preventDefault();
              setSelectedSouse(0);
            }}
          >
            <strong className='pizza__txtStrong'>
              {shaurma.souses[0]}
            </strong>
          </Button>
          {shaurma.souses.length === 2 && (
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
              {shaurma.souses[1]}
            </strong>
            </Button>
          )}
        </Card.Text>
        <Card.Text >
          <strong className='pizzaCard__price'>
            {`${shaurma.price} грн.`}
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
              const copyShaurma = JSON.parse(JSON.stringify(shaurma));
              copyShaurma.quantity = quantity || 1;
              if (quantity === 0) {
                setQuantity(1);
              }
              setShow(true);
              if (productsInCart.some((product: any) => product.id === copyShaurma.id)) {
                const obj: any = {quantity, id: copyShaurma.id};
                dispatch(incrementWithValue(obj))
              } else {
                  dispatch(addProduct(copyShaurma));
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



