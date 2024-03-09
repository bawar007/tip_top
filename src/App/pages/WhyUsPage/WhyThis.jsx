import Section from "../../components/Section/Section";
import { WhyThisItems } from "../../data/whyusData";

import "./WhyThis.scss";

const WhyThis = () => {
  return (
    <Section
      className="WhyThisPage"
      id="whyUs"
      dataNaviitem=".WhyUs-NaviItem"
      title="dlaczego my?"
    >
      <div className="WhyThis__content">
        {WhyThisItems.map((el) => (
          <div key={el.id + "b"} className="whyUs--item">
            <div className="title">
              <img
                src={el.imgSrc}
                alt={el.imgSrc}
                className="whyThisListItem"
              />
              <p>{el.text}</p>
              <span>{el.subtext}</span>
            </div>
            <hr />
            <div className="item__content">
              {el.content.map((item) => (
                <div className="content--item" key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyThis;
