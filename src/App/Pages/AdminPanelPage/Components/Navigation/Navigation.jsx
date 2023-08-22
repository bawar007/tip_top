import { Link } from "react-router-dom";
import { deletePassCookie } from "../../Pages/LoginSettingsPage/helpers/SetCookie";

const Navigation = () => {
  return (
    <div className="NavigationAdminPanel">
      <ul className="navigation-menu">
        <span></span>
        <li className="menu-item">
          <Link to="gallerysettings" className="item-link">
            <img
              src="/icons/projects.svg"
              alt="projects"
              width={40}
              height={40}
            />
            <h4>Projekty</h4>
          </Link>
        </li>
        <span></span>
        <li className="menu-item">
          <Link to="whyussettings" className="item-link">
            <img src="/icons/whyUs.svg" alt="whyus" width={40} height={40} />
            <h4>Dlaczego my</h4>
          </Link>
        </li>
        <span></span>
        <li className="menu-item">
          <Link to="opinionssettings" className="item-link">
            <img src="/icons/whyUs.svg" alt="whyus" width={40} height={40} />
            <h4>Opinie</h4>
          </Link>
        </li>
        <span></span>
        <li className="menu-item">
          <Link
            to="/admin"
            onClick={() => {
              deletePassCookie();
              sessionStorage.clear();
            }}
            className="item-link"
          >
            <img src="/icons/logout.svg" alt="logout" width={40} height={40} />
          </Link>
        </li>
        <span></span>
      </ul>
    </div>
  );
};

export default Navigation;
