export const OpinionsAlert = (text) => {
  const opinionsBox = document.querySelector(".opinionsBox");
  const deletePopBox = document.createElement("div");
  deletePopBox.classList.add("updatePop_box");
  const deletePop = document.createElement("div");
  deletePop.classList.add("updatepop");
  deletePop.innerHTML = `<h2>${text}</h2>`;
  deletePopBox.appendChild(deletePop);
  opinionsBox.appendChild(deletePopBox);
  setTimeout(() => deletePopBox.remove(), 2500);
};
