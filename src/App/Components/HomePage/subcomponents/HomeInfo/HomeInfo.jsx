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
        <p>
          <b>TIP-TOP</b> to firma, która jest zwięczeniem 15-letniego
          doświadczenia w glazurnictwie oraz wykończeniach wnętrz. Dzięki tak
          dużemu doświadczeniu nasze usługi są wykonywane profesjonalnie w
          dodatku szybko i solidnie. Głównym naszym celem jest kontakt z
          klientem, dzięki czemu współpraca na tej linii przebiega bez
          najmniejszych komplikacji.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
