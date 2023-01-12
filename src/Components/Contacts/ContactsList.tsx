import React from "react";

export const ContactsList: React.FC <any> = ({data}) => {
  return (
    <ul className="contactsList">
      {!data[0].hasOwnProperty('mailto') && !data[0].hasOwnProperty('blank') ? (
        data.map((item: any) => (
      <li className="contactsList__item" key={item.name}>
        <a
          className="contactsList__link" 
          href={`tel:${item.name}`}
        >
          {`${item.name}`}
        </a>
      </li>
        ))
      ) : data[0].hasOwnProperty('mailto') ? (
        <li className="contactsList__item">
          <a className="contactsList__link" href={data[0].mailto}>
            {data[0].name}
          </a>
        </li>
      ) : (
        data.map((item: any) => (
          <li className="contactsList__item" key={item.name} >
            <a 
              className="contactsList__link" 
              href={item.link} 
              target='_blank' 
              rel="noreferrer"
            >
            {item.name}
            </a>
          </li>
        ))
      )}
    </ul>
  )
}