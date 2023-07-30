import { createContext, useState } from "react";

import { handleCloseAddOpinion } from "../helpers/feedbackService";

export const FormAddOpinionContext = createContext(null);

const FormHelper = ({ children }) => {
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

  //wyciąganie numeru projektu z bazy

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

    handleCloseAddOpinion();
  };

  return (
    <FormAddOpinionContext.Provider
      value={{
        resetForm,
        formValues,
        setFormValues,
      }}
    >
      {children}
    </FormAddOpinionContext.Provider>
  );
};

export default FormHelper;
