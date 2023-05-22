import { WhyThisItems } from "./data";

const WhyThis = () => {
  return (
    <section className="WhyThisPage" id="whyUs" data-naviitem=".WhyUs-NaviItem">
      <h1 className="title_page">Dlaczego my?</h1>
      <div className="WhyThis-Content">
        {WhyThisItems.map((el, index) => (
          <div
            key={el.id + "b"}
            className={`whyUs--item animate__delay-${index}s`}
          >
            <div className="title">
              <img
                src={el.imgSrc}
                alt={el.imgSrc}
                className="whyThisListItem"
              />
              <p>{el.text}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyThis;
