import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { phones } from '../../utils/data';

export const HeaderDropdown = () => {
  return (
    <NavDropdown 
      title="Телефони" 
      id="collasible-nav-dropdown" 
      className='header__dropdown'
    >
      {phones.map((phone) => (
        <NavDropdown.Item 
          href={`tel:${phone}`} 
          key={phone}
        >
          {phone}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

