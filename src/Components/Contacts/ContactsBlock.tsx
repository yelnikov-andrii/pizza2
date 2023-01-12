import { ContactsBlockItem } from "./ContactsBlockItem";

export const ContactsBlock = () => {
  const email = [
    {
      mailto: 'mailto:pizzashop@gmail.com',
      name: 'pizzashop@gmail.com',
    }
  ];
  
  const address = [
    {
      name: 'м.Харків, вул. Героїв Харкова 298',
      blank: true,
      link: 'https://goo.gl/maps/WZ9wufaczsi7AFSi7'
    },
    {
      name: 'м.Харків, вул. Велика Кільцева 136-А',
      blank: true,
      link: 'https://goo.gl/maps/6j4hGFrotNwsfjLN6'
    }
  ];
  
  const phoneArr = [
    {
      name: "+3809312345678"
    },
    {
      name: "+3806712345678",
    },
    {
      name: "+3809912345678"
    }
  ]
  const contactsArr = [
    {
      img: 'https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-1443275951-1.svg',
      data: phoneArr,
    },
    {
      img: 'https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-1235660799-1.svg',
      data: email
    },
    {
      img: 'https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-1235715142-1.svg',
      data: address,
    }
  ];

  return (
    <div className="contactsBlock">
      <ContactsBlockItem contact={contactsArr[0]}/>
      <ContactsBlockItem contact={contactsArr[1]}/>
      <ContactsBlockItem contact={contactsArr[2]}/>
    </div>
  )
}