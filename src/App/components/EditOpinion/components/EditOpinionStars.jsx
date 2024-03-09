import Star from "../../Star/Star";
import StarsInfoBox from "../../StarsInfoBox/StarsInfoBox";

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
        {[1, 2, 3, 4, 5].map((item) => (
          <Star
            className={starsO >= item ? "checked editStar" : "editStar"}
            onClick={() => {
              handleChangeStars(item);
            }}
            onMouseOver={() => hoverChangeStars(item)}
            onMouseOut={() => mouseOut()}
            key={`${item}star`}
          />
        ))}
      </div>
      <StarsInfoBox rate={starsO} />
    </>
  );
};

export default EditOpinionStars;
