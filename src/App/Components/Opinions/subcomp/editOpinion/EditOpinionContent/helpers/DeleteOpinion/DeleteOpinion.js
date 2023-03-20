import axios from "axios";

const deletePop = () => {
  const opinionsBox = document.querySelector(".opinionsBox");
  const deletePopBox = document.createElement("div");
  deletePopBox.classList.add("updatePop_box");
  const deletePop = document.createElement("div");
  deletePop.classList.add("updatepop");
  deletePop.innerHTML = "<h2>Dane zostały usunięte</h2>";
  deletePopBox.appendChild(deletePop);
  opinionsBox.appendChild(deletePopBox);
  setTimeout(() => deletePopBox.remove(), 2500);
};

export const handleDeleteOpinion = async (email) => {
  try {
    await axios.delete(`http://localhost:5000/opinions/${email}`);
    setTimeout(() => deletePop(), 500);
  } catch (error) {
    console.log(error);
  }
};
