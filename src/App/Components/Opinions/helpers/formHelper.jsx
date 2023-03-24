import { createContext, useContext, useState } from "react";

import validator from "validator";
import axios from "axios";
import { AppContext } from "../../../Provider/Provider";

export const FormAddOpinionContext = createContext(null);

const FormHelper = ({ children }) => {
  const { phoneNumber, getUsers } = useContext(AppContext);

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

  const project_id_test = phoneNumber.filter(
    (el) => el.phone_number === Number(phone)
  );

  const validation = () => {
    const findPhone = phoneNumber.findIndex(
      (el) => el.phone_number === Number(phone)
    );

    let phoneT = false;

    if (findPhone === -1 || phone.length !== 9) {
      phoneT = false;
    } else {
      phoneT = true;
    }

    if (validator.isDate(public_data)) {
    } else {
      alert("Podaj datę !");
    }
    if (phoneT && textValid && starsValid) {
      opinionPost();
      resetForm();
    } else {
      alert("Formularz zawiera błędy");
    }
  };

  const opinionPost = async () => {
    const { project_id, phone_number } = project_id_test[0];
    try {
      await axios.post("https://tip-top-backend.onrender.com/opinions", {
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
    await getUsers();
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
    getUsers();
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
