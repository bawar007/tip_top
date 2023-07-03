export const handleCloseAddOpinion = () => {
  const opinion_box = document.querySelector(".add_opinion_box");
  const opinionAdd = document.querySelector(".add_opinion");
  if (opinion_box || opinionAdd) {
    opinionAdd.classList.remove("openModalOpinion");
    opinion_box.classList.remove("openModalBg");
  }
};
