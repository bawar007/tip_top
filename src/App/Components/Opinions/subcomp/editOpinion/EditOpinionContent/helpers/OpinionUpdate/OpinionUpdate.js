import axios from "axios";

const updatePop = () => {
  const opinionsBox = document.querySelector(".opinionsBox");
  const updatePopBox = document.createElement("div");
  updatePopBox.classList.add("updatePop_box");
  const updatePop = document.createElement("div");
  updatePop.classList.add("updatepop");
  updatePop.innerHTML = "<h2>Dane zostały zaktualizowane</h2>";
  updatePopBox.appendChild(updatePop);
  opinionsBox.appendChild(updatePopBox);
  setTimeout(() => updatePopBox.remove(), 2500);
};

export const OpinionUpdate = async (email, textO, starsO) => {
  try {
    await axios.patch(
      `https://tip-top-backend.onrender.com/opinions/${email}`,
      {
        text: textO,
        stars: starsO,
      }
    );
    setTimeout(() => updatePop(), 500);
  } catch (error) {
    console.log(error);
  }
};
