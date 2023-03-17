import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';
import { LoadingCard } from '../UI/LoadingCard/LoadingCard';
import { useRequest } from '../../hooks/useRequest';
import { useAlert } from '../../hooks/useAlert';
import { ProductCardMainInfo } from './ProductCardMainInfo';
import { ProductCardSizes } from './ProductCardSizes';
import { ProductCardSouses } from './ProductCardSouses';
import { ProductCardWeightAndCount } from './ProductCardWeightAndCount';
import { ProductCardCounter } from './ProductCardCounter';
import { url } from '../../API/index';

export const ProductCard = () => {
  const { id } = useParams();
  const [product, loading, error]: any = useRequest(getProduct);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [selectedSouse, setSelectedSouse] = React.useState(0);
  const { show, showAlert } = useAlert();

  function getProduct() {
    return axios.get(`${url}/products/${id}`)
  }

  if (error) {
    return (
      <Container className='productCard'>
        <h1>Error: we can not load product because {error}</h1>
      </Container>
    )
  }

  if (loading === true) {
    return (
      <LoadingCard />
    )
  }

  return (
    <Container className='productCard'>
      <Row>
        <Col md={6}>
          <img 
            src={product && product.img} 
            alt="" 
            className='productCard__img'
          />
        </Col>
        <Col 
          md={{ span: 5, offset: 1 }}
        >
        {product && (
          <Card>
            <Card.Body>
              <ProductCardMainInfo 
                product={product}
              />
              <ProductCardSizes
                product={product}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <ProductCardSouses 
                product={product}
                selectedSouse={selectedSouse}
                setSelectedSouse={setSelectedSouse}
              />
              <ProductCardWeightAndCount product={product} />
            {product.price && (
              <Card.Text >
                <strong className='productCard__price'>
                  {`${product.price} грн.`}
                </strong>
              </Card.Text>
            )}
            {product.prices && (
              <Card.Text >
                <strong className='productCard__price'>
                  {`${product.prices[selectedSize]} грн.`}
                </strong>
              </Card.Text>
            )}
            <ProductCardCounter
              product={product}
              selectedSize={selectedSize}
              selectedSouse={selectedSouse}
              showAlert={showAlert}
            />
            <Alert className='pizza__alert' show={show}>
              Товар доданий до кошику
            </Alert>
            </Card.Body>
          </Card>
        )}
        </Col>
      </Row>
    </Container>
  );
};