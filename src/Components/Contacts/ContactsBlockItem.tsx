import { Contact } from '../../types/types';
import {ContactsList} from './ContactsList';

interface Props {
  contact: Contact;
}

export const ContactsBlockItem: React.FC <Props> = ({contact}) => {
  return (
    <div className="contactsBlockItem">
      <img 
        src={contact.img} 
        alt=""
        className="contactsBlockItem__img"
      />
      <ContactsList data={contact.data} />
    </div>
  )
}