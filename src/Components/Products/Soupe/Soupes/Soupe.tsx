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

export const Soupe: React.FC <any> = ({soupe}) => {
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
      <LinkContainer to={soupe.id}>
        <Card.Img variant="top" src={soupe.img} className="pizza__img" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={soupe.id}>
          <Card.Title className='pizza__name'>
            {soupe.name}
          </Card.Title>
        </LinkContainer>
        <Card.Subtitle>
        <CardComponents components={soupe.components} />
        </Card.Subtitle>
        <Card.Text>
          {soupe.weight > 0 && (
            <Button 
            variant="outline-warning" 
            size="sm"
            active
            className="pizza__button"
          >
            <strong
              className="pizza__txtStrong"
            >
              {`${soupe.weight} г.`}
            </strong>
          </Button>
          )}
        </Card.Text>
        <Card.Text >
          <strong className='pizza__price'>
            {`${soupe.price} грн.`}
          </strong>
        </Card.Text>
        <Button
          variant="outline-warning"
          className='pizza__button--fullWidth'
          onClick={(e) => {
            e.preventDefault();
            const copySoupe = JSON.parse(JSON.stringify(soupe));
            copySoupe.quantity = 1;

            setShow(true);
            if (productsInCart.some((soupe: any) => soupe.id === copySoupe.id)) {
              dispatch(increment(copySoupe.id));
            } else {
              dispatch(addProduct(copySoupe));
            }
          }}
        >
          До кошику
        </Button>
        <Alert className='pizza__alert' show={show}>
          Суп доданий до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}