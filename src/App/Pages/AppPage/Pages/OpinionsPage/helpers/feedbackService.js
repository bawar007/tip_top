export const handleCloseAddOpinion = () => {
  const opinion_box = document.querySelector(".add_opinion_box");
  const opinionAdd = document.querySelector(".add_opinion");
  const stars = document.querySelectorAll(".checkedAdd");

  stars.forEach((item) => {
    item.style.filter = "";
  });

  opinionAdd.classList.remove("openModalOpinion");
  opinion_box.classList.remove("openModalBg");
  opinion_box.classList.remove("openModalBgAdding");
};

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

export const mouseOutAddOpinion = (newOpinionFormValues) => {
  const starsEl = document.querySelectorAll(".checkedAdd");
  starsEl.forEach((el, index) => {
    if (index < newOpinionFormValues.rate) {
      el.style.filter = `invert(58%) sepia(48%) saturate(1566%) hue-rotate(2deg)
        brightness(107%) contrast(104%)`;
    } else {
      el.style.filter = "";
    }
  });
};

export const handleChangeAddOpinionStars = (star, setNewOpinionFormValues) => {
  setNewOpinionFormValues((prev) => ({ ...prev, rate: star }));
  const starsEl = document.querySelectorAll(".checkedAdd");
  const numbers = document.querySelector(".starInfoBox > .info");

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
