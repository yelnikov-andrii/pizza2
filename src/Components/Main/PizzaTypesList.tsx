import ListGroup from 'react-bootstrap/ListGroup';
import { arrTypes } from '../../data';

export const PizzaTypesList: React.FC <any> = ({setFilterType, filterType}) => {
  return (
    <ListGroup 
      horizontal
      className='pizzaTypes'
    >
      {arrTypes.map(type => (
          <ListGroup.Item 
          action
          key={type}
          variant='info'
          onClick={() => {
            setFilterType(type)
          }}
          active={filterType === type ? true : false}
        >
          {type}
      </ListGroup.Item>
      ))}
    </ListGroup>
  );
}