import { Link } from "react-router-dom";

type Props = {
  arr: string[];
}

export const FooterList: React.FC <any> = ({arr}) => {
  return (
    <ul className="footerList">
      {arr.map((item: any) => (
        <li className="footerList__item" key={item.id}>
          <Link to={item.link} className="footerList__link">
            {item.name}
          </Link>
        </li>
      ))}
      </ul>
  )
}
