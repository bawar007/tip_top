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
        <span className="info_text">
          <b>TIP-TOP</b> to firma, która jest zwięczeniem 15-letniego
          doświadczenia w glazurnictwie oraz wykończeniach wnętrz.
          <p>
            Dzięki tak dużemu doświadczeniu nasze usługi są wykonywane
            profesjonalnie w dodatku szybko i solidnie.
          </p>
          <p>
            Priorytetem dla nas jest dobry kontakt z klientem, dzięki czemu
            współpraca na tej linii przebiega bez najmniejszych komplikacji.
          </p>
        </span>
      </div>
    </div>
  );
};

export default HomeInfo;
