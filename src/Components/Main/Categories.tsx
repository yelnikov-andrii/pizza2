import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Category } from '../../types/types';

interface Props {
  arr: Category[];
}

export const Categories: React.FC <Props> = ({arr}) => {
  return (
    <Navbar 
      variant="dark" 
      className='categories' 
      sticky='top'
    >
      <Container>
        <Nav className="me-auto categories__nav">
          {arr.map((item: Category) => (
            <LinkContainer 
              to={item.link}
              key={item.id}
            >
              <Nav.Link className='categories__link'>
                {item.name}
              </Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Categories;

