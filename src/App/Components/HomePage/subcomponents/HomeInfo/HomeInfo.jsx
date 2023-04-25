import { useContext } from "react";
import TitlePageLogo from "../TitlePageLogo/TitlePageLogo";
import { AppContext } from "../../../../Provider/Provider";

const HomeInfo = () => {
  const { tip } = useContext(AppContext);
  return (
    <div className="homeInfo">
      <div className="info">
        <TitlePageLogo />
        <span className="info_text">
          <img
            src={`${tip}/icons/LogoTipTopCss.svg`}
            alt="logo"
            className="LogoHomeInfo--img"
          />{" "}
          <p style={{ marginTop: 10 }}>
            to firma, która jest zwięczeniem 15-letniego doświadczenia w
            glazurnictwie oraz wykończeniach wnętrz.
          </p>
          <br />
          <p>
            Dzięki tak dużemu doświadczeniu nasze usługi są wykonywane
            profesjonalnie w dodatku szybko i solidnie.
          </p>
          <br />
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
