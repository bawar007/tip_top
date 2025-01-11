import { Outlet } from "react-router";
import Navi from "../components/Navi/Navi";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <Navi />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Copyright © 2023 - {new Date().getFullYear()} Tip-Top</p>
        <p>Wszelkie prawa zastrzeżone</p>
        <p>Powered By Kamil Barski</p>
      </footer>
    </div>
  );
};

export default MainLayout;
