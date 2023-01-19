import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardComponents } from '../../../UI/CardComponents/CardComponents';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct, increment } from '../../../../redux/productsSlice';
import { useSelector } from 'react-redux';

export const Snack: React.FC <any> = ({snack}) => {
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
      <LinkContainer to={snack.id}>
        <Card.Img variant="top" src={snack.img} className="pizza__img" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={snack.id}>
          <Card.Title className='pizza__name'>
            {snack.name}
          </Card.Title>
        </LinkContainer>
        <Card.Subtitle>
        <CardComponents components={snack.components} />
        </Card.Subtitle>
        <Card.Text>
          {snack.weight > 0 && (
            <Button 
            variant="outline-warning" 
            size="sm"
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
            size="sm"
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
          <strong className='pizza__price'>
            {`${snack.price} грн.`}
          </strong>
        </Card.Text>
        <Button
          variant="outline-warning"
          className='pizza__button--fullWidth'
          onClick={(e) => {
            e.preventDefault();
            const copySnack = JSON.parse(JSON.stringify(snack));
            copySnack.quantity = 1;

            setShow(true);
            if (productsInCart.some((snack: any) => snack.id === copySnack.id)) {
              dispatch(increment(copySnack.id));
            } else {
              dispatch(addProduct(copySnack));
            }
          }}
        >
          До кошику
        </Button>
        <Alert className='pizza__alert' show={show}>
          Закуска додана до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}