import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert } from 'react-bootstrap';
import { CardComponents } from '../UI/CardComponents/CardComponents';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct, increment } from '../../redux/productsSlice';

export const SushiItem: React.FC <any> = ({sushiItem}) => {
  const [show, setShow] = React.useState(false);
  const productsInCart = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  return (
    <Card className="pizza">
      <LinkContainer to={sushiItem.id}>
        <Card.Img variant="top" src={sushiItem.img} className="pizza__img" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={sushiItem.id}>
        <Card.Title className='pizza__name'>{sushiItem.name}</Card.Title>
        </LinkContainer>
        <CardComponents components={sushiItem.components} />
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
              {`${sushiItem.weight} г.`}
            </strong>
            <span className='pizza__txt'>
              {`(${sushiItem.count} шт.)`}
            </span>
          </Button>
        </Card.Text>
        <Card.Text >
          <strong className='pizza__price'>
            {`${sushiItem.price} грн.`}
          </strong>
        </Card.Text>
        <Button
          variant="outline-warning"
          className='pizza__button--fullWidth'
          onClick={(e) => {
            e.preventDefault();
            const copySushi = JSON.parse(JSON.stringify(sushiItem));
            copySushi.quantity = 1;
            setShow(true);
            if (productsInCart.some((product: any) => product.id === copySushi.id)) {
              dispatch(increment(copySushi.id));
            } else {
              dispatch(addProduct(copySushi));
            }
          }}
        >
          До кошику
        </Button>
        <Alert className='pizza__alert' show={show}>
          Суші додані до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}