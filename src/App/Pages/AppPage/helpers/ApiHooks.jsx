import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const HOST = "http://localhost:5000";

export const postNewOpinion = async (formValues) => {
  const { imie, email, opinion_text, date, selected_project, rate } =
    formValues;
  try {
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
