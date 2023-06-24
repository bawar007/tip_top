const wrongClassBtn = "btn-wrong";
const wrongClassBtnAnimation = "wrongAnimation";
const wrongClassSpan = "wrong";

const clearWrongSpan = (spanEl, btnEl, inputs) =>
  setTimeout(() => {
    spanEl.innerHTML = "";
    spanEl.classList.remove(wrongClassSpan);
    btnEl.classList.remove(wrongClassBtn);
    btnEl.classList.remove(wrongClassBtnAnimation);
    inputs.forEach((input) => input.classList.remove("adminInputWrong"));
  }, 3000);

const addWrongClass = (spanEl, btnEl, inputs, INFO) => {
  spanEl.classList.add(wrongClassSpan);

  if (INFO === "BAD_L_P") {
    spanEl.innerHTML = "Błędny login lub hasło";
  } else if (INFO === "NO_DATE") {
    spanEl.innerHTML = "wprowadz dane";
  }

  btnEl.classList.add(wrongClassBtn);
  btnEl.classList.add(wrongClassBtnAnimation);

  inputs.forEach((input) => input.classList.add("adminInputWrong"));
};

export const WrongHandler = (spanEl, btnEl, inputs, INFO) => {
  clearWrongSpan(spanEl.current, btnEl.current, inputs);
  addWrongClass(spanEl.current, btnEl.current, inputs, INFO);
};
