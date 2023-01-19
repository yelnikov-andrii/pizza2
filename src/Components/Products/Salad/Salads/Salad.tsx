import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardComponents } from '../../../UI/CardComponents/CardComponents';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct, increment } from '../../../../redux/productsSlice';
import { useSelector } from 'react-redux';
import { useGetPrevProps } from '../../../../hooks/useGetPrevProps';

export const Salad: React.FC <any> = ({salad}) => {
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

  return (
    <Card className="pizza">
      <LinkContainer to={salad.id}>
        <Card.Img variant="top" src={salad.img} className="pizza__img" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={salad.id}>
          <Card.Title className='pizza__name'>
            {salad.name}
          </Card.Title>
        </LinkContainer>
        <Card.Subtitle>
        <CardComponents components={salad.components} />
        </Card.Subtitle>
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
          <strong className='pizza__price'>
            {`${salad.price} грн.`}
          </strong>
        </Card.Text>
        <Button
          variant="outline-warning"
          className='pizza__button--fullWidth'
          onClick={(e) => {
            e.preventDefault();
            const copySalad = JSON.parse(JSON.stringify(salad));
            copySalad.quantity = 1;

            setShow(true);
            if (productsInCart.some((product: any) => product.id === copySalad.id)) {
              dispatch(increment(copySalad.id));
            } else {
              dispatch(addProduct(copySalad));
            }
          }}
        >
          До кошику
        </Button>
        <Alert className='pizza__alert' show={show}>
          Салат доданий до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}