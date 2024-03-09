import { HashLink } from "react-router-hash-link";

const NavigationItem = ({ onClick, className, children, name }) => {
  return (
    <li onClick={onClick} id={`${name.toLowerCase()}-li`}>
      <HashLink to={`#${name}`} className={className}>
        {children}
      </HashLink>
    </li>
  );
};

export default NavigationItem;
