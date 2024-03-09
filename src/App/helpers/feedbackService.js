export const handleCloseAddOpinion = () => {
  const stars = document.querySelectorAll(".checkedAdd");
  stars.forEach((item) => {
    item.style.filter = "";
  });
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

  starsEl.forEach((el, index) => {
    if (index < star) {
      el.style.filter = `invert(58%) sepia(48%) saturate(1566%) hue-rotate(2deg)
        brightness(107%) contrast(104%)`;
    } else {
      el.style.filter = "";
    }
  });
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
