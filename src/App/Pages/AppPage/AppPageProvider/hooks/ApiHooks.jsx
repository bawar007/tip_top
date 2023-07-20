import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const HOST = "http://localhost:5000";

export const getAllPicsFromApi = async (setPicsFromBG) => {
  await axios
    .get(`${HOST}/files`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((response) => {
      const files = response.data.files;
      const test = files.map((file, index) => {
        const id = index + 1;
        const first = `/${file.name}/${file.table[0]}`;
        const all = file.table.map((fileName) => `/${file.name}/${fileName}`);

        return { id, first, all };
      });
      setPicsFromBG(test);
    })
    .catch((error) => {
      console.error("Error fetching file:", error);
    });
};

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
