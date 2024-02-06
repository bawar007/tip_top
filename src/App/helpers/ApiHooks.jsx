import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const postNewOpinion = async (formValues, HOST) => {
  const { imie, email, opinion_text, date, selected_project, rate } =
    formValues;
  try {
    console.log(HOST);
    await axios.post(
      `${HOST}/opinions`,
      {
        imie,
        email,
        project_id: selected_project,
        text: opinion_text,
        stars: rate,
        public_data: date,
        status: "queued",
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
