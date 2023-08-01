import axios from "axios";

const HOST = "https://tip-top-backend-worker.onrender.com";
const API_KEY = process.env.REACT_APP_API_KEY;

export const handleDeleteOpinion = async (id) => {
  try {
    await axios.delete(`${HOST}/opinions/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    alert("Dane zostały zaktualizowane");
  }
};

export const handleOpinionUpdate = async (id, textO, starsO) => {
  console.log(id);
  try {
    await axios.patch(
      `${HOST}/opinions/${id}`,
      {
        text: textO,
        stars: starsO,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    setTimeout(() => alert("Dane zostały zaktualizowane"), 500);
  } catch (error) {
    console.log(error);
  }
};

export const handleAcceptOpinion = async (data) => {
  try {
    await axios.patch(
      `${HOST}/opinions/${data}`,
      {
        status: "accepted",
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  } finally {
    alert("Opinie zostały zaakceptowane");
  }
};
