import { createContext, useContext, useState } from "react";
import {
  PHONE_LENGTH,
  checkPhoneNumberFromZleceniodawcy,
  checkTheNumberHasAlreadyAddedReview,
  opinionsElCheckedEmail,
} from "./variables";

import { handleCloseAddOpinion } from "./handlers/handlers";

import axios from "axios";
import { AppContext } from "../../../Provider/Provider";
import { PopUpOpinions } from "../subcomp/editOpinion/EditOpinionContent/helpers/PopUp/PopUp";

export const FormAddOpinionContext = createContext(null);

const FormHelper = ({ children }) => {
  const { phoneNumberFromZleceniodawcy, getOpinions, HOST, opinionsFromDB } =
    useContext(AppContext);

  const [imie, setImie] = useState();
  const [nazwisko, setNazwisko] = useState();
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [textLenght, setTextLenght] = useState(0);
  const [stars, setStars] = useState(0);
  const [public_data, setPublic_data] = useState();
  const [phone, setPhone] = useState();

  const [textValid, setTextValid] = useState(false);
  const [starsValid, setStarsValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const validation = () => {
    //sprawdzanie czy numer jest w bazie danych
    if (
      checkPhoneNumberFromZleceniodawcy(phoneNumberFromZleceniodawcy, phone) ||
      phone.length !== PHONE_LENGTH
    ) {
      setPhoneValid(false);
      alert(`Numeru ${phone} nie ma w bazie danych !!`);
      return;
    } else {
      setPhoneValid(true);
    }

    //sprawdzanie czy numer dodał już opinie

    if (checkTheNumberHasAlreadyAddedReview(opinionsFromDB, phone)) {
      setPhoneValid(false);
      alert(`Numer ${phone} dodał już opinię, ale możesz ją edytować !!`);
      return;
    } else {
      setPhoneValid(true);
    }

    // sprawdzanie czy email dodał już opinię

    if (opinionsElCheckedEmail(opinionsFromDB, email)) {
      setEmailValid(false);
      alert(
        "Podany email " +
          email +
          " znajduje się już w naszej bazie. Może chcesz edytować swoją opinie?"
      );

      return;
    } else {
      setEmailValid(true);
    }

    if (phoneValid && textValid && starsValid && emailValid) {
      opinionPost();
      PopUpOpinions("Opinia została dodana!");
      resetForm();
    } else {
      if (!textValid) {
        alert(`Sprawdz swoją opinię !`);
        return;
      }
      if (!starsValid) {
        alert(`Sprawdz gwiazdki !`);
      }
    }
  };

  //wyciąganie numeru projektu z bazy

  const project_id_test = phoneNumberFromZleceniodawcy.filter(
    (el) => el.phone_number === Number(phone)
  );

  const opinionPost = async () => {
    const { project_id, phone_number } = project_id_test[0];
    try {
      await axios.post(`${HOST}/opinions`, {
        imie,
        nazwisko,
        email,
        phone: phone_number,
        project_id,
        text,
        stars,
        public_data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setImie("");
    setNazwisko("");
    setEmail("");
    setText("");
    setStars(0);
    setPublic_data("");
    setPhone("");
    setTextLenght(0);
    getOpinions();
    handleCloseAddOpinion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "text") {
      setText(value);
      setTextLenght(value.length);
      if (value.length <= 50) {
        setTextValid(false);
      } else {
        setTextValid(true);
      }
    }
    if (name === "public_data") {
      setPublic_data(value);
    }
    if (name === "phone") {
      setPhone(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (project_id_test.length > 0) {
      setImie(project_id_test[0].imie);
      setNazwisko(project_id_test[0].nazwisko);
    }
  };

  return (
    <FormAddOpinionContext.Provider
      value={{
        validation,
        imie,
        handleChange,
        nazwisko,
        email,
        phone,
        text,
        textLenght,
        public_data,
        resetForm,
        setStars,
        stars,
        setStarsValid,
        setImie,
        setNazwisko,
        setEmail,
      }}
    >
      {children}
    </FormAddOpinionContext.Provider>
  );
};

export default FormHelper;
