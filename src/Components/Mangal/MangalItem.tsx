import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardComponents } from '../UI/CardComponents/CardComponents';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct, increment } from '../../redux/productsSlice';
import { useSelector } from 'react-redux';

export const MangalItem: React.FC <any> = ({mangal}) => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  return (
    <Card className="pizza">
      <LinkContainer to={mangal.id}>
        <Card.Img variant="top" src={mangal.img} className="pizza__img" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={mangal.id}>
          <Card.Title className='pizza__name'>
            {mangal.name}
          </Card.Title>
        </LinkContainer>
        <Card.Subtitle>
        {mangal.components && (
          <CardComponents components={mangal.components} />
        )}
        </Card.Subtitle>
        <Card.Text>
          {mangal.weight > 0 && (
            <Button 
            variant="outline-warning" 
            size="sm"
            active
            className="pizza__button"
          >
            <strong
              className="pizza__txtStrong"
            >
              {`${mangal.weight} г.`}
            </strong>
          </Button>
          )}
        </Card.Text>
        <Card.Text >
          <strong className='pizza__price'>
            {`${mangal.price} грн.`}
          </strong>
        </Card.Text>
        <Button
          variant="outline-warning"
          className='pizza__button--fullWidth'
          onClick={(e) => {
            e.preventDefault();
            const copyMangal = JSON.parse(JSON.stringify(mangal));
            copyMangal.quantity = 1;

            setShow(true);
            if (productsInCart.some((product: any) => product.id === copyMangal.id)) {
              dispatch(increment(copyMangal.id));
            } else {
              dispatch(addProduct(copyMangal));
            }
          }}
        >
          До кошику
        </Button>
        <Alert className='pizza__alert' show={show}>
          Страва додана до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}