const Stars = ({ setStarsValid, setStars, stars }) => {
  const handleChangeStars = (star) => {
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

  const hoverChangeStars = (star) => {
    const starsEl = document.querySelectorAll(".checkedAdd");
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.style.color = "orange";
      } else {
        el.style.color = "";
      }
    });
  };
  const mouseOut = () => {
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
            handleChangeStars(1);
          }}
          onMouseOver={() => hoverChangeStars(1)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeStars(2);
          }}
          onMouseOver={() => hoverChangeStars(2)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeStars(3);
          }}
          onMouseOver={() => hoverChangeStars(3)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeStars(4);
          }}
          onMouseOver={() => hoverChangeStars(4)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className="fa fa-starfa fa-star checkedAdd"
          onClick={() => {
            handleChangeStars(5);
          }}
          onMouseOver={() => hoverChangeStars(5)}
          onMouseOut={() => mouseOut()}
        ></span>
      </div>
      <div className="starInfoBox">
        <span className="info"></span>
      </div>
    </label>
  );
};

export default Stars;
