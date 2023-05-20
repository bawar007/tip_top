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

  const starEl = (
    <img
      src="/tip_top/icons/star.svg"
      alt="star"
      width="20"
      height="20"
      className="checked"
    />
  );

  return (
    <div className="opinion">
      <h2>Jesteś naszym klientem?</h2>
      <p>Jeżeli tak to zapraszamy do dodania opinii na temat naszych usług</p>
      <div className="stars">
        {starEl}
        {starEl}
        {starEl}
        {starEl}
        {starEl}
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
