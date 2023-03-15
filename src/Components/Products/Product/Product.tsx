import React  from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert } from 'react-bootstrap';
import { useAlert } from '../../../hooks/useAlert';
import { ProductMainInfo } from './ProductMainInfo';
import { ProductWeightOrCount } from './ProductWeightOrCount';
import { ProductSizes } from './ProductSizes';
import { ProductSouses } from './ProductSouses';
import { ProductButtonAdd } from './ProductButtonAdd';

export const Product: React.FC <any> = ({ product, link }) => {
  const [selectedSize, setSelectedSize] = React.useState<number>(0);
  const [selectedSouse, setSelectedSouse] = React.useState<number>(0);
  const { show, showAlert } = useAlert();

  return (
    <Card className="product">
      <LinkContainer to={link || product.id.toString()} >
        <Card.Img 
          variant="top" 
          src={product.img} 
          className="product__img" 
        />
      </LinkContainer>
      <Card.Body>
        <ProductMainInfo 
          product={product} 
        />
        {(product.weight || product.count) && (
          <ProductWeightOrCount 
            product={product} 
          />
        )}
        {product.sizes && (
          <ProductSizes 
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        )}
        {product.souses && (
          <ProductSouses 
            product={product}
            selectedSouse={selectedSouse}
            setSelectedSouse={setSelectedSouse}
          />
        )}
        {product.price && (
          <Card.Text >
            <strong className='product__price'>
              {`${product.price} грн.`}
            </strong>
          </Card.Text>
        )}
        {product.prices && (
          <Card.Text >
          <strong className='product__price'>
            {`${product.prices[selectedSize]} грн.`}
          </strong>
        </Card.Text>
        )}
        <ProductButtonAdd
          product={product}
          selectedSize={selectedSize}
          selectedSouse={selectedSouse}
          showAlert={showAlert}
        />
        <Alert className='product__alert' show={show}>
          Товар доданий до кошику
        </Alert>
      </Card.Body>
    </Card>
  );
}