import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardComponents } from '../../../UI/CardComponents/CardComponents';
import classnames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct, increment } from '../../../../redux/productsSlice';
import { useSelector } from 'react-redux';

export const Pizza: React.FC <any> = ({pizza, link}) => {
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [selectedSouse, setSelectedSouse] = React.useState(0);
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
      <LinkContainer to={link || pizza.id}>
        <Card.Img variant="top" src={pizza.img} className="pizza__img" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={link || pizza.id}>
          <Card.Title className='pizza__name'>
            {pizza.name}
          </Card.Title>
        </LinkContainer>
        <Card.Subtitle>
        <CardComponents components={pizza.components} />
        </Card.Subtitle>
        <Card.Text>
          <Button 
            variant="outline-warning" 
            size="sm"
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
            size="sm"
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
            size="sm"
            active={selectedSouse === 0 ? true : false}
            className={classnames('pizza__button', {
              "pizza__button--hidden": pizza.souses.length === 0
            })}
            onClick={(e) => {
              e.preventDefault();
              setSelectedSouse(0);
            }}
          >
            <strong className='pizza__txtStrong'> {pizza.souses[0]}</strong>
          </Button>
          {pizza.souses.length === 2 && (
            <Button 
              variant="outline-warning" 
              size="sm" 
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
          <strong className='pizza__price'>
            {`${pizza.prices[selectedSize]} грн.`}
          </strong>
        </Card.Text>
        <Button
          variant="outline-warning"
          className='pizza__button--fullWidth'
          onClick={(e) => {
            e.preventDefault();
            const copyPizza = JSON.parse(JSON.stringify(pizza));
            copyPizza.selectedSize = selectedSize;
            copyPizza.selectedSouse = copyPizza.souses[selectedSouse];
            copyPizza.id += selectedSize.toString() + selectedSouse;
            copyPizza.quantity = 1;

            setShow(true);
            if (productsInCart.some((pizza: any) => pizza.id === copyPizza.id)) {
              dispatch(increment(copyPizza.id));
            } else {
              dispatch(addProduct(copyPizza));
            }
          }}
        >
          До кошику
        </Button>
        <Alert className='pizza__alert' show={show}>
          Піца додана до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}