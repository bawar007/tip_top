import { WhyThisItems } from "../../data/whyusData";

import "./WhyThis.scss";

const WhyThis = () => {
  return (
    <section className="WhyThisPage" id="whyUs" data-naviitem=".WhyUs-NaviItem">
      <h1 className="title_page">Dlaczego my?</h1>
      <div className="WhyThis-Content">
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
    </section>
  );
};

export default WhyThis;
