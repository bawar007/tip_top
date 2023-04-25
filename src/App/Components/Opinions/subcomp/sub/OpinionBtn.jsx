const OpinionBtn = () => {
  const handleOpenAddOpinion = () => {
    const opinion_box = document.querySelector(".add_opinion_box");
    const opinionAdd = document.querySelector(".add_opinion");
    opinionAdd.classList.add("openModalOpinion");
    opinion_box.classList.add("openModalBg");
  };

  const handleOpenEditOpinion = () => {
    const opinion_edit_box = document.querySelector(".edit_opinion_box");
    const opinionEdit = document.querySelector(".edit_opinion");
    opinionEdit.classList.add("openModalOpinion");
    opinion_edit_box.classList.add("openModalBg");
  };
  return (
    <div className="opinion">
      <h2>Jesteś naszym klientem?</h2>
      <p>
        Jeżeli tak to zapraszamy do dodania Twojej opinii na temat naszych usług
      </p>
      <div className="stars">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
      <button onClick={handleOpenAddOpinion} className="btn_Accept">
        DODAJ OPINIĘ
      </button>
      <button className="btn_Accept" onClick={handleOpenEditOpinion}>
        EDYTUJ OPINIĘ
      </button>
    </div>
  );
};

export default OpinionBtn;
