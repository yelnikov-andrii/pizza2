import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogout } from '../../API/services/Auth/useLogout';

export const HeaderAuthenticated = () => {
  const { logout } = useLogout();
  return (
    <>
      <Nav.Link onClick={(e) => {
        e.preventDefault();
        logout();
      }}>
        Вийти
      </Nav.Link>
      <LinkContainer to="personal-account">
        <Nav.Link>
          Кабінет особистий
        </Nav.Link>
      </LinkContainer>
    </>
  );
};

