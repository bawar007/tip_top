import { Link } from "react-router-dom";
import { deletePassCookie } from "../../LoginPage/helpers/SetCookie";

const Navigation = () => {
  return (
    <div className="NavigationAdminPanel">
      <ul>
        <Link to="gallerysettings">Projekty</Link>
        <Link to="whyussettings">Dlaczego my</Link>
        <li>Projekty</li>
        <li>Dlaczego my</li>

        <li>
          <Link to="/admin" onClick={() => deletePassCookie()}>
            Wyloguj się
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;