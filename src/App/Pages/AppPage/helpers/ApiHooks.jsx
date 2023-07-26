import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const HOST = "http://localhost:5000";

export const getUserFromApi = async (setPhoneNumberFromZleceniodawcy) => {
  const response = await axios.get(`${HOST}/user`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  setPhoneNumberFromZleceniodawcy(response.data);
  if (response.error) {
    console.error(response.error);
  }
};

export const getOpinionsFromApi = async (setOpinions) => {
  const response = await axios.get(`${HOST}/opinions`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  setOpinions(response.data);
  if (response.error) {
    console.error(response.error);
  }
};

export const postNewOpinion = async (project_id_test, formValues) => {
  const { project_id, phone_number } = project_id_test[0];
  const { imie, nazwisko, email, text, stars, public_data } = formValues;
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
