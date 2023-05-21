import OfertsFirst from "./Oferts/OfertsFirst";
import OfertsSecond from "./Oferts/OfertsSecond";

const Ofert = () => {
  return (
    <section className="Ofert_Page" id="ofert" data-naviitem=".Ofert-NaviItem">
      <h1 className="title_page">OFERTA</h1>
      <div className="Ofert_Page--Content">
        <div className="content_multi-container">
          <OfertsFirst />
          <OfertsSecond />
        </div>
      </div>
    </section>
  );
};

export default Ofert;
