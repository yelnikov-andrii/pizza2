import {ContactsList} from './ContactsList';

export const ContactsBlockItem: React.FC <any> = ({contact}) => {
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