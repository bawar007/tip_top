import BoxFlip from "../../components/BoxFlip/BoxFlip";
import ContentInfoBox from "../../components/ContentInfoBox/ContentInfoBox";

import Section from "../../components/Section/Section";

import "./HomePage.scss";

const Settings = {
  className: "homePage",
  id: "home",
};

const HomePage = () => {
  const pinkColor = "rgba(247, 94, 178, 0.9)";

  return (
    <Section {...Settings}>
      <div className="homePage__content">
        <div className="homeCustomLogo">
          <BoxFlip style={{ backgroundColor: pinkColor }} />
          <BoxFlip srcPic="tiling.svg" text="TIP - TOP" />
          <BoxFlip
            style={{ backgroundColor: pinkColor }}
            srcPic="experience.svg"
            text="Doświadczenie"
          />
          <BoxFlip
            style={{ backgroundColor: "rgba(174, 203, 31, 0.9)" }}
            srcPic="priority.svg"
            text="Priorytety"
          />
        </div>
        <div className="home_info--content">
          <ContentInfoBox>
            TIP-TOP to firma, która jest zwięczeniem 15-letniego doświadczenia w
            glazurnictwie oraz wykończeniach wnętrz.
          </ContentInfoBox>
          <ContentInfoBox>
            Dzięki dużemu doświadczeniu nasze usługi są wykonywane
            profesjonalnie, szybko i solidnie.
          </ContentInfoBox>
          <ContentInfoBox>
            Priorytetem dla nas jest dobry kontakt z klientem, dzięki czemu
            współpraca na tej linii przebiega bez najmniejszych komplikacji.
          </ContentInfoBox>
        </div>
      </div>
    </Section>
  );
};

export default HomePage;
