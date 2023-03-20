import { Container } from 'react-bootstrap';
import { categoriesArr, infoArr } from '../../utils/data';
import { FooterList } from './FooterList';
import { FooterListIcons } from './FooterListIcons';
import { FooterListContacts } from './FooterListContacts';

export const Footer = () => {
  return (
    <Container fluid className="footer">
      <div className="container">
        <div className="footer__block">
          <div className="footer__blockItem">
            <p className="footer__title">
              Категорії
            </p>
            <FooterList arr={categoriesArr}/>
          </div>
          <div className="footer__blockItem">
            <p className="footer__title">
              Інформація
            </p>
            <FooterList arr={infoArr} />
          </div>
          <div className="footer__blockItem">
            <p className="footer__title">
              Контакти
            </p>
            <FooterListContacts />
          </div>
          <div className="footer__blockItem">
            <p className="footer__title">
              Ми у соцмережах
            </p>
            <FooterListIcons />
          </div>
        </div>
      </div>
    </Container>
  );
};


