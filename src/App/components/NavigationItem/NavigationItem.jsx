import { NavLink } from "react-router";

const NavigationItem = ({ onClick, className, children, name }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <li onClick={onClick} id={`${name.toLowerCase()}-li`}>
      <NavLink to={`${name}`} className={className} onClick={handleClick}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
