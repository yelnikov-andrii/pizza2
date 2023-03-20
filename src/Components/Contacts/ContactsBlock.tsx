import { ContactsBlockItem } from './ContactsBlockItem';
import { contactsArr } from '../../utils/data';

export const ContactsBlock = () => {
  return (
    <div className="contactsBlock">
      <ContactsBlockItem contact={contactsArr[0]}/>
      <ContactsBlockItem contact={contactsArr[1]}/>
      <ContactsBlockItem contact={contactsArr[2]}/>
    </div>
  );
};
