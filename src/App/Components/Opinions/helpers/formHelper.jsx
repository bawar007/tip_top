import { createContext, useContext, useState } from "react";

import validator from "validator";
import axios from "axios";
import { AppContext } from "../../../Provider/Provider";
import { PopUpOpinions } from "../subcomp/editOpinion/EditOpinionContent/helpers/PopUp/PopUp";

export const FormAddOpinionContext = createContext(null);

const FormHelper = ({ children }) => {
  const { phoneNumberFromZleceniodawcy, getOpinions, HOST, opinionsEl } =
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

  const project_id_test = phoneNumberFromZleceniodawcy.filter(
    (el) => el.phone_number === Number(phone)
  );

  const validation = () => {
    //sprawdzanie czy numer jest w bazie danych
    if (project_id_test.length === 0 || phone.length !== 9) {
      setPhoneValid(false);
      alert(`Numeru ${phone} nie ma w bazie danych !!`);
      return;
    } else {
      setPhoneValid(true);
    }

    //sprawdzanie czy numer dodał już opinie

    const opinionsElCheckedPhone = opinionsEl.filter(
      (el) => el.phone === Number(phone)
    );

    if (opinionsElCheckedPhone.length >= 1) {
      setPhoneValid(false);
      alert(`Numer ${phone} dodał już opinię, ale możesz ją edytować !!`);
      return;
    } else {
      setPhoneValid(true);
    }

    // sprawdzanie czy email dodał już opinię

    const opinionsElCheckedEmail = opinionsEl.filter(
      (el) => el.email === email
    );

    if (opinionsElCheckedEmail.length > 0) {
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

    if (validator.isDate(public_data)) {
    } else {
      alert("Podaj datę !");
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

  const handleCloseAddOpinion = () => {
    const opinion_box = document.querySelector(".add_opinion_box");
    const opinionAdd = document.querySelector(".add_opinion");
    if (opinion_box || opinionAdd) {
      opinionAdd.classList.remove("openModalOpinion");
      opinion_box.classList.remove("openModalBg");
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
        handleCloseAddOpinion,
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
