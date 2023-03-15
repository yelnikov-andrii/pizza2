import React from 'react';
import { Container } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';
import { Oval } from  'react-loader-spinner';

export const LoadingCard = () => {
  return (
    <Container className='pizzaCard'>
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
        <ContentLoader 
          speed={2}
          width={1400}
          height={800}
          viewBox="0 0 1500 1000"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="17" y="117" rx="0" ry="0" width="500" height="400" /> 
          <rect x="700" y="117" rx="0" ry="0" width="450" height="60" /> 
          <rect x="700" y="200" rx="0" ry="0" width="450" height="90" /> 
          <rect x="700" y="330" rx="0" ry="0" width="200" height="50" /> 
          <rect x="950" y="330" rx="0" ry="0" width="200" height="50" /> 
          <rect x="700" y="420" rx="0" ry="0" width="200" height="57" /> 
          <rect x="950" y="420" rx="0" ry="0" width="200" height="57" />
        </ContentLoader>
      </div>
  </Container>
  );
};

