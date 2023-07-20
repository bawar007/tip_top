export const hoverChangeAddOpinionStars = (star) => {
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

export const mouseOutAddOpinion = (formValues) => {
  const starsEl = document.querySelectorAll(".checkedAdd");
  starsEl.forEach((el, index) => {
    if (index < formValues.stars) {
      el.style.filter = `invert(58%) sepia(48%) saturate(1566%) hue-rotate(2deg)
        brightness(107%) contrast(104%)`;
    } else {
      el.style.filter = "";
    }
  });
};

export const handleChangeAddOpinionStars = (
  star,
  setFormValid,
  setFormValues
) => {
  setFormValues((prev) => ({ ...prev, stars: star }));
  const starsEl = document.querySelectorAll(".checkedAdd");
  const numbers = document.querySelector(".starInfoBox > .info");
  setFormValid((prev) => ({ ...prev, starsValid: true }));

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

export const IconsForStars = [
  {
    id: 1,
    src: "/icons/star.svg",
    class: "checkedAdd",
  },
  {
    id: 2,
    src: "/icons/star.svg",
    class: "checkedAdd",
  },
  {
    id: 3,
    src: "/icons/star.svg",
    class: "checkedAdd",
  },
  {
    id: 4,
    src: "/icons/star.svg",
    class: "checkedAdd",
  },
  {
    id: 5,
    src: "/icons/star.svg",
    class: "checkedAdd",
  },
];
