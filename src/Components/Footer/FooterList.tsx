import { Link } from "react-router-dom";
import { Category } from "../../types/types";

type Props = {
  arr: Category[];
}

export const FooterList: React.FC <Props> = ({arr}) => {
  return (
    <ul className="footerList">
      {arr.map((item: Category) => (
        <li 
          className="footerList__item" 
          key={item.id}
        >
          <Link 
            to={item.link} 
            className="footerList__link"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
