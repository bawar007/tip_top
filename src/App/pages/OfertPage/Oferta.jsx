import MultiContainerInfoBox from "../../components/MultiContainerInfoBox/MultiContainerInfoBox";
import Section from "../../components/Section/Section";
import "./Oferta.scss";
import { oferts } from "../../data/ofertData";

const Ofert = () => {
  return (
    <Section
      className="Ofert_Page"
      id="ofert"
      dataNaviitem=".Ofert-NaviItem"
      title="OFERTA"
    >
      <div className="Ofert_Page__content">
        <div className="content_multi-container">
          <MultiContainerInfoBox {...oferts[0]} />
          <MultiContainerInfoBox {...oferts[1]} />
        </div>
      </div>
    </Section>
  );
};

export default Ofert;
