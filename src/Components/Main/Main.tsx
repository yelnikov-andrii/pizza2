import React from 'react';
import { Container } from 'react-bootstrap';
import { PizzaTypesList } from './PizzaTypesList';
import { Oval } from  'react-loader-spinner';
import { Pizzas } from './Pizzas';
import { Loader } from './Loader';

export const Main: React.FC<any> = ({loading, error}) => {
  const [filterType, setFilterType] = React.useState('Усі');

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you pizzas, because {error}</h1>
      </Container>
    )
  }
  return (
    <Container className='main'>
        <h1 className='main__header'>Піца</h1>
        {loading 
        ? 
        <div>
          <h1>
            Loading...
          </h1>
          <Oval
              height={40}
              width={40}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass="pizzas__oval"
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          <div className="pizzas__block">
              <Loader />
            </div>
          </div>
        : (
        <>
        <PizzaTypesList 
          setFilterType={setFilterType} 
          filterType={filterType} 
        /><Pizzas filterType={filterType} />
        </>
        )}
    </Container>
  );
};

