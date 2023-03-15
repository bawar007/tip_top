import { useContext } from "react";
import { FormAddOpinionContext } from "../../helpers/formHelper";

const Stars = () => {
  const { setStarsValid, setStars, stars } = useContext(FormAddOpinionContext);

  const handleChangeAddOpinionStars = (star) => {
    setStars(star);
    const starsEl = document.querySelectorAll(".checkedAdd");
    const numbers = document.querySelector(".starInfoBox > .info");
    setStarsValid(true);
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.style.color = "orange";
      } else {
        el.style.color = "";
      }
    });
    numbers.innerHTML = `Twoja ocena: ${star}/5`;
    numbers.style.visibility = "visible";
  };

  const hoverChangeAddOpinionStars = (star) => {
    const starsEl = document.querySelectorAll(".checkedAdd");
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.style.color = "orange";
      } else {
        el.style.color = "";
      }
    });
  };
  const mouseOutAddOpinion = () => {
    const starsEl = document.querySelectorAll(".checkedAdd");
    starsEl.forEach((el, index) => {
      if (index < stars) {
        el.style.color = "orange";
      } else {
        el.style.color = "";
      }
    });
  };

  return (
    <label>
      <h2>Ocena usługi</h2>
      <div className="starsBox">
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(1);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(1)}
          onMouseOut={() => mouseOutAddOpinion()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(2);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(2)}
          onMouseOut={() => mouseOutAddOpinion()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(3);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(3)}
          onMouseOut={() => mouseOutAddOpinion()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(4);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(4)}
          onMouseOut={() => mouseOutAddOpinion()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(5);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(5)}
          onMouseOut={() => mouseOutAddOpinion()}
        ></span>
      </div>
      <div className="starInfoBox">
        <span className="info"></span>
      </div>
    </label>
  );
};

export default Stars;
