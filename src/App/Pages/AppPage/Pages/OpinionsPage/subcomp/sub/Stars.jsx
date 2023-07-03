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
        el.style.filter = `invert(58%) sepia(48%) saturate(1566%) hue-rotate(2deg)
        brightness(107%) contrast(104%)`;
      } else {
        el.style.filter = "";
      }
    });
    numbers.innerHTML = `Twoja ocena: ${star}/5`;
    numbers.style.visibility = "visible";
  };

  const hoverChangeAddOpinionStars = (star) => {
    const starsEl = document.querySelectorAll(".checkedAdd");
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.style.filter = `invert(58%) sepia(48%) saturate(1566%) hue-rotate(2deg)
        brightness(107%) contrast(104%)`;
      } else {
        el.style.filter = "";
      }
    });
  };
  const mouseOutAddOpinion = () => {
    const starsEl = document.querySelectorAll(".checkedAdd");
    starsEl.forEach((el, index) => {
      if (index < stars) {
        el.style.filter = `invert(58%) sepia(48%) saturate(1566%) hue-rotate(2deg)
        brightness(107%) contrast(104%)`;
      } else {
        el.style.filter = "";
      }
    });
  };

  return (
    <label>
      <h2>Ocena usługi</h2>
      <div className="starsBox">
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className="checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(1);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(1)}
          onMouseOut={() => mouseOutAddOpinion()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className="checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(2);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(2)}
          onMouseOut={() => mouseOutAddOpinion()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className="checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(3);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(3)}
          onMouseOut={() => mouseOutAddOpinion()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className="checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(4);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(4)}
          onMouseOut={() => mouseOutAddOpinion()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className="checkedAdd"
          onClick={() => {
            handleChangeAddOpinionStars(5);
          }}
          onMouseOver={() => hoverChangeAddOpinionStars(5)}
          onMouseOut={() => mouseOutAddOpinion()}
        />
      </div>
      <div className="starInfoBox">
        <span className="info"></span>
      </div>
    </label>
  );
};

export default Stars;
