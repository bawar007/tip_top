import { WhyThisItems } from "./data";

const WhyThis = () => {
  const ContentItems = WhyThisItems.map((el) => (
    <div key={el.id}>
      <div className="title">
        <img src={el.imgSrc} alt={el.imgSrc} className="whyThisListItem" />
        <p>{el.text}</p>
      </div>
      <hr />
    </div>
  ));

  return (
    <section className="WhyThisPage">
      <h1 className="title_page">Dlaczego my?</h1>
      <div className="WhyThis-Content">{ContentItems}</div>
    </section>
  );
};

export default WhyThis;
