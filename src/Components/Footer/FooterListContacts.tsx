import { contacts } from '../../utils/data';

export const FooterListContacts = () => {
  return (
    <ul className="footerList">
      {contacts.map((contact) => (
        <li 
          className="footerList__item" 
          key={contact}
        >
          <a 
            href={contact[0] === '+' 
              ? `tel: ${contact}` 
              : contact[0] === 'p' 
                ? `mailto: ${contact}` 
                : contact} className="footerList__link"
          >
            {contact}
          </a>
        </li>
      ))}
      <li className="footerList__item">
        <a 
          className="footerList__link" 
          href="https://goo.gl/maps/WZ9wufaczsi7AFSi7" 
          target="_blank"
          rel="noreferrer"
        >
          м.Харків, вул. Героїв Харкова 298
        </a>
      </li>
      <li className="footerList__item">
        <a 
          className="footerList__link" 
          href="https://goo.gl/maps/6j4hGFrotNwsfjLN6" 
          target="_blank"
          rel="noreferrer"
        >
          м.Харків, вул. Велика Кільцева 136-А
        </a>
      </li>
    </ul>
  );
};
