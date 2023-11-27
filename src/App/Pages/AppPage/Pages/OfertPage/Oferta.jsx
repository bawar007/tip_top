const Ofert = () => {
  const ofertsFirst = [
    "pełny zakres remontu",
    "renowacja łazienki",
    "przeróbki hydrauliczne",
    "montaż baterii podtynkowych",
    "montaż odpływu liniowego",
    "montaż kabin prysznicowych",
    "biały montaż",
    "glazura, terakota",
    "montaż drzwi",
    "montaż oświetlenia typu LED",
  ];

  const ofertsSecond = [
    "malowanie",
    "szpachlowanie sufitów i ścian",
    "suche zabudowy",
    "sufity podwieszane",
    "panele",
    "listwy przypodłogowe",
    "terakota, gres",
    "płytki ceramiczne",
    "płytki gipsowe",
    "cegła",
    "montaż drzwi wewnętrznych",
    "montaż oświetlenia typu LED",
  ];

  const ListItemsFirst = ofertsFirst.map((item) => (
    <li key={item} className="infoBox_list--item">
      <img
        src="/icons/measure.svg"
        alt="da"
        className="OfertListItem--img"
        width="40"
        height="40"
      />
      {item}
    </li>
  ));

  const ListItemsSecond = ofertsSecond.map((item) => (
    <li key={item} className="infoBox_list--item">
      <img
        src="/icons/measure.svg"
        alt="da"
        className="OfertListItem--img"
        width="40"
        height="40"
      />
      {item}
    </li>
  ));

  return (
    <section className="Ofert_Page" id="ofert" data-naviitem=".Ofert-NaviItem">
      <h1 className="title_page">OFERTA</h1>
      <div className="Ofert_Page--Content">
        <div className="content_multi-container">
          <div className="multi-container--infoBox">
            <div className="ofert_title">
              <img
                src="/icons/shower.svg"
                alt="houseforofert"
                width="45"
                height="45"
              />
              <h1>Łazienka</h1>
            </div>
            <ul className="infoBox_list">{ListItemsFirst}</ul>
          </div>

          <div className="multi-container--infoBox">
            <div className="ofert_title">
              <img
                src="/icons/interior.svg"
                alt="houseforofert"
                width="60"
                height="60"
              />
              <h1>Wykończenia</h1>
            </div>
            <ul className="infoBox_list">{ListItemsSecond}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ofert;
