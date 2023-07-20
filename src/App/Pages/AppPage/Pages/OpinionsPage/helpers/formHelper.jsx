import { createContext, useContext, useState } from "react";
import {
  PHONE_LENGTH,
  checkPhoneNumberFromZleceniodawcy,
  checkTheNumberHasAlreadyAddedReview,
  opinionsElCheckedEmail,
} from "./variables";

import { handleCloseAddOpinion } from "./hooks/handlers";

import { AppContext } from "../../../AppPageProvider/AppPageProvider";
import { PopUpOpinions } from "../subcomp/editOpinion/EditOpinionContent/helpers/PopUp/PopUp";
import { postNewOpinion } from "../../../AppPageProvider/hooks/ApiHooks";

export const FormAddOpinionContext = createContext(null);

const FormHelper = ({ children }) => {
  const { phoneNumberFromZleceniodawcy, getOpinionsFromMyApi, opinionsFromDB } =
    useContext(AppContext);

  const [formValues, setFormValues] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    text: "",
    textLenght: 0,
    stars: 0,
    public_data: "",
    phone: "",
  });

  const [formValid, setFormValid] = useState({
    textValid: false,
    starsValid: false,
    phoneValid: false,
    emailValid: false,
  });

  //wyciąganie numeru projektu z bazy

  const project_id_test = phoneNumberFromZleceniodawcy.filter(
    (el) => el.phone_number === Number(formValues.phone)
  );

  const validation = () => {
    //sprawdzanie czy numer jest w bazie danych
    const { phone, email } = formValues;
    if (
      checkPhoneNumberFromZleceniodawcy(phoneNumberFromZleceniodawcy, phone) ||
      phone.length !== PHONE_LENGTH
    ) {
      setFormValid((prev) => ({ ...prev, phoneValid: false }));
      alert(`Numeru ${phone} nie ma w bazie danych !!`);
      return;
    } else {
      setFormValid((prev) => ({ ...prev, phoneValid: true }));
    }

    //sprawdzanie czy numer dodał już opinie

    if (checkTheNumberHasAlreadyAddedReview(opinionsFromDB, phone)) {
      setFormValid((prev) => ({ ...prev, phoneValid: false }));
      alert(`Numer ${phone} dodał już opinię, ale możesz ją edytować !!`);
      return;
    } else {
      setFormValid((prev) => ({ ...prev, phoneValid: true }));
    }

    // sprawdzanie czy email dodał już opinię

    if (opinionsElCheckedEmail(opinionsFromDB, email)) {
      setFormValid((prev) => ({ ...prev, emailValid: false }));
      alert(
        "Podany email " +
          email +
          " znajduje się już w naszej bazie. Może chcesz edytować swoją opinie?"
      );

      return;
    } else {
      setFormValid((prev) => ({ ...prev, emailValid: true }));
    }

    if (
      formValid.phoneValid &&
      formValid.textValid &&
      formValid.starsValid &&
      formValid.emailValid
    ) {
      postNewOpinion(project_id_test, formValues);
      PopUpOpinions("Opinia została dodana!");
      resetForm();
    } else {
      if (!formValid.textValid) {
        alert(`Sprawdz swoją opinię !`);
        return;
      }
      if (!formValid.starsValid) {
        alert(`Sprawdz gwiazdki !`);
      }
    }
  };

  const resetForm = () => {
    setFormValues({
      imie: "",
      nazwisko: "",
      email: "",
      text: "",
      textLenght: 0,
      stars: 0,
      public_data: "",
      phone: "",
    });

    getOpinionsFromMyApi();
    handleCloseAddOpinion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "text") {
      setFormValues((prev) => ({ ...prev, text: value }));
      setFormValues((prev) => ({ ...prev, textLenght: value.length }));
      if (value.length <= 50) {
        setFormValid((prev) => ({ ...prev, textValid: false }));
      } else {
        setFormValid((prev) => ({ ...prev, textValid: true }));
      }
    }
    if (name === "public_data") {
      setFormValues((prev) => ({ ...prev, public_data: value }));
    }
    if (name === "phone") {
      setFormValues((prev) => ({ ...prev, phone: value }));
    }
    if (name === "email") {
      setFormValues((prev) => ({ ...prev, email: value }));
    }
    if (project_id_test.length > 0) {
      setFormValues((prev) => ({ ...prev, imie: project_id_test[0].imie }));
      setFormValues((prev) => ({
        ...prev,
        nazwisko: project_id_test[0].nazwisko,
      }));
    }
  };

  return (
    <FormAddOpinionContext.Provider
      value={{
        validation,
        handleChange,
        resetForm,
        setFormValid,
        formValues,
        setFormValues,
      }}
    >
      {children}
    </FormAddOpinionContext.Provider>
  );
};

export default FormHelper;
