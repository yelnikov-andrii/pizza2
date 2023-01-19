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
import { useGetPrevProps } from '../../../../hooks/useGetPrevProps';

export const Shaurma: React.FC <any> = ({shaurma}) => {
  const [selectedSouse, setSelectedSouse] = React.useState(0);
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
      <LinkContainer to={shaurma.id}>
        <Card.Img variant="top" src={shaurma.img} className="pizza__img" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={shaurma.id}>
          <Card.Title className='pizza__name'>
            {shaurma.name}
          </Card.Title>
        </LinkContainer>
        <Card.Subtitle>
        <CardComponents components={shaurma.components} />
        </Card.Subtitle>
        <Card.Text>
          <Button
            variant="outline-warning"
            size="sm"
            active={selectedSouse === 0 ? true : false}
            className={classnames('pizza__button', {
              "pizza__button--hidden": shaurma.souses.length === 0
            })}
            onClick={(e) => {
              e.preventDefault();
              setSelectedSouse(0);
            }}
          >
            <strong className='pizza__txtStrong'> {shaurma.souses[0]}</strong>
          </Button>
          {shaurma.souses.length === 2 && (
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
              {shaurma.souses[1]}
            </strong>
            </Button>
          )}
        </Card.Text>
        <Card.Text >
          <strong className='pizza__price'>
            {`${shaurma.price} грн.`}
          </strong>
        </Card.Text>
        <Button
          variant="outline-warning"
          className='pizza__button--fullWidth'
          onClick={(e) => {
            e.preventDefault();
            const copyShaurma = JSON.parse(JSON.stringify(shaurma));
            copyShaurma.selectedSouse = copyShaurma.souses[selectedSouse];
            copyShaurma.id += selectedSouse;
            copyShaurma.quantity = 1;

            setShow(true);
            if (productsInCart.some((product: any) => product.id === copyShaurma.id)) {
              dispatch(increment(copyShaurma.id));
            } else {
              dispatch(addProduct(copyShaurma));
            }
          }}
        >
          До кошику
        </Button>
        <Alert className='pizza__alert' show={show}>
          Шаурма додана до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}