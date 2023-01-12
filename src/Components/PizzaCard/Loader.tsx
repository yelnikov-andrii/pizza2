import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = () => {
  return (
    <div>
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
  );
};

