import { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const LogoLoadPage = () => {
  const { tip } = useContext(AppContext);
  return (
    <div className="LogoLoadPage">
      <img
        src={`${tip}/icons/LogoTipTopCss.svg`}
        alt="logo"
        className="LogoLoadPage--img"
        fetchpriority="high"
      />
    </div>
  );
};

export default LogoLoadPage;
