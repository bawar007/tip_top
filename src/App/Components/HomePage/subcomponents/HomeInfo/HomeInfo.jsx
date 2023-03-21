import { useContext } from "react";
import { AppContext } from "../../../../Provider/Provider";

import TitlePageLogo from "../TitlePageLogo/TitlePageLogo";

const HomeInfo = () => {
  const { tip } = useContext(AppContext);
  return (
    <div className="homeInfo">
      <img
        src={`${tip}/icons/LogoTipTopCss.svg`}
        alt="logo"
        className="logoItem homeItemLogo"
      />

      <div className="info">
        <TitlePageLogo />
        <h2>FIRMA KTÓRA ODMIENII KAŻDE WNĘTRZE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          maiores, corporis labore totam ipsam laborum nostrum iste consectetur
          obcaecati, ratione vero cumque officia eveniet rerum distinctio
          placeat dolorem est dolor?
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
