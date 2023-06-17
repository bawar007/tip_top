export const setPassCookie = (pass, id) => {
  // Ustawienie daty wygaśnięcia cookie na 30 dni od teraz
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  // Utworzenie ciasteczka
  var cookie =
    "password=" + pass + "; secure expires=" + expirationDate.toUTCString();

  var cookietwo =
    "isMatch=" + id + "; secure expires=" + expirationDate.toUTCString();

  // Ustawienie ciasteczka w przeglądarce
  document.cookie = cookie;
  document.cookie = cookietwo;
};

export const deletePassCookie = () => {
  // Usuwanie ciasteczka o nazwie "pass"
  document.cookie = "pass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Usuwanie ciasteczka o nazwie "isMatch"
  document.cookie = "isMatch=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
