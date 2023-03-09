const OpinionBtn = () => {
  const handleOpenAddOpinion = () => {
    const opinion_box = document.querySelector(".add_opinion_box");
    const opinionAdd = document.querySelector(".add_opinion");
    opinionAdd.classList.add("openModalOpinion");
    opinion_box.classList.add("openModalBg");
  };
  return (
    <div className="opinion">
      <h2>Jesteś naszym klientem?</h2>
      <p>
        Jeżeli tak do zapraszamy do dodania Twojej opinii na temat naszych usług
      </p>
      <div className="stars">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
      <button onClick={handleOpenAddOpinion} className="btn_Accept">
        Dodaj swoją opinię
      </button>
    </div>
  );
};

export default OpinionBtn;
