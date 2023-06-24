import bcrypt from "bcryptjs";

// Funkcja do szyfrowania hasła
export const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(11); // Generowanie soli
    const encryptedPassword = await bcrypt.hash(password, salt); // Szyfrowanie hasła
    return encryptedPassword;
  } catch (error) {
    console.error("Błąd podczas szyfrowania hasła:", error);
    throw new Error("Błąd podczas szyfrowania hasła");
  }
};

// Funkcja do deszyfrowania hasła i weryfikacji
export const verifyPassword = async (password, encryptedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, encryptedPassword); // Porównanie hasła
    return isMatch;
  } catch (error) {
    return false;
  }
};
