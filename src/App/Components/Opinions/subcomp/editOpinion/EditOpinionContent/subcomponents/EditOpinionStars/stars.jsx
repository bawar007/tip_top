const EditOpinionStars = ({ setStars, setStarsValid, starsO }) => {
  const handleChangeStars = (star) => {
    setStars(star);
    const starsEl = document.querySelectorAll(".editStar");
    const numbers = document.querySelector(".starInfoBoxEdit > .info");
    setStarsValid(true);
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.classList.add("checked");
      } else {
        el.classList.remove("checked");
      }
    });
    numbers.innerHTML = `Twoja ocena: ${star}/5`;
    numbers.style.visibility = "visible";
  };

  const hoverChangeStars = (star) => {
    const starsEl = document.querySelectorAll(".editStar");
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.classList.add("checked");
      } else {
        el.classList.remove("checked");
      }
    });
  };
  const mouseOut = () => {
    const starsEl = document.querySelectorAll(".editStar");
    starsEl.forEach((el, index) => {
      if (index < starsO) {
        el.classList.add("checked");
      } else {
        el.classList.remove("checked");
      }
    });
  };

  return (
    <>
      <div className="stars">
        <span
          className={
            starsO >= 1 ? "fa fa-star checked editStar" : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(1);
          }}
          onMouseOver={() => hoverChangeStars(1)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            starsO >= 2 ? "fa fa-star checked editStar" : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(2);
          }}
          onMouseOver={() => hoverChangeStars(2)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            starsO >= 3 ? "fa fa-star checked editStar" : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(3);
          }}
          onMouseOver={() => hoverChangeStars(3)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            starsO >= 4 ? "fa fa-star checked editStar" : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(4);
          }}
          onMouseOver={() => hoverChangeStars(4)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            starsO === 5 ? "fa fa-star checked editStar" : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(5);
          }}
          onMouseOver={() => hoverChangeStars(5)}
          onMouseOut={() => mouseOut()}
        ></span>
      </div>
      <div className="starInfoBoxEdit">
        <span className="info"></span>
      </div>
    </>
  );
};

export default EditOpinionStars;
