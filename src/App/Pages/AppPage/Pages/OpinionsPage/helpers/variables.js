export const PHONE_LENGTH = 9;
export const EMAIL_IS_FIND_IN_OPINIONS_DB = 0;

const PHONE_ISNT_FIND_IN_ZLECENIODAWCY_DB = -1;

export const checkPhoneNumberFromZleceniodawcy = (
  phoneNumberFromZleceniodawcy,
  phone
) =>
  phoneNumberFromZleceniodawcy.findIndex(
    (el) => el.phone_number === Number(phone)
  ) === PHONE_ISNT_FIND_IN_ZLECENIODAWCY_DB;

const PHONE_IS_FIND_IN_OPINIONS_DB = 0;

export const checkTheNumberHasAlreadyAddedReview = (opinionsFromDB, phone) =>
  opinionsFromDB.findIndex((el) => el.phone === Number(phone)) ===
  PHONE_IS_FIND_IN_OPINIONS_DB;

export const opinionsElCheckedEmail = (opinionsFromDB, email) =>
  opinionsFromDB.findIndex((el) => el.email === email) ===
  EMAIL_IS_FIND_IN_OPINIONS_DB;
