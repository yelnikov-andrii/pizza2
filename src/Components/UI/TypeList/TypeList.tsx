import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const TypeList: React.FC <any> = ({ setFilterType, filterType, types, setPage }) => {
  return (
    <ListGroup 
      horizontal
      className='typeList'
    >
      {types.map((type: any) => (
        <ListGroup.Item 
          action
          key={type}
          variant='info'
          onClick={() => {
            setFilterType(type);
            setPage(1);
          }}
          active={filterType === type ? true : false}
        >
          {type}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
