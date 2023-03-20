import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

export const HeaderAuth = () => {
  return (
    <>
      <LinkContainer to="login">
        <Nav.Link>
          Логін
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="registration">
        <Nav.Link>
          Реєстрація
        </Nav.Link>
      </LinkContainer>
    </>
  );
};

