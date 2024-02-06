const EditOpinionStars = ({ setStars, starsO }) => {
  const handleChangeStars = (star) => {
    setStars(star);
    const starsEl = document.querySelectorAll(".editStar");

    starsEl.forEach((el, index) => {
      if (index < star) {
        el.classList.add("checked");
      } else {
        el.classList.remove("checked");
      }
    });
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
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={starsO >= 1 ? "checked editStar" : "editStar"}
          onClick={() => {
            handleChangeStars(1);
          }}
          onMouseOver={() => hoverChangeStars(1)}
          onMouseOut={() => mouseOut()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={starsO >= 2 ? "checked editStar" : "editStar"}
          onClick={() => {
            handleChangeStars(2);
          }}
          onMouseOver={() => hoverChangeStars(2)}
          onMouseOut={() => mouseOut()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={starsO >= 3 ? "checked editStar" : "editStar"}
          onClick={() => {
            handleChangeStars(3);
          }}
          onMouseOver={() => hoverChangeStars(3)}
          onMouseOut={() => mouseOut()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={starsO >= 4 ? "checked editStar" : "editStar"}
          onClick={() => {
            handleChangeStars(4);
          }}
          onMouseOver={() => hoverChangeStars(4)}
          onMouseOut={() => mouseOut()}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={starsO >= 5 ? "checked editStar" : "editStar"}
          onClick={() => {
            handleChangeStars(5);
          }}
          onMouseOver={() => hoverChangeStars(5)}
          onMouseOut={() => mouseOut()}
        />
      </div>
      <div className="starInfoBoxEdit">
        <span className="info">{`Twoja ocena: ${starsO}/5`}</span>
      </div>
    </>
  );
};

export default EditOpinionStars;
