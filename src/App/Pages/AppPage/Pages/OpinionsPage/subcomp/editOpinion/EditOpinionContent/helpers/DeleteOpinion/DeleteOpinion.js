import axios from "axios";
import { PopUpOpinions } from "../PopUp/PopUp";

const HOST = "http://localhost:5000";
const API_KEY = process.env.REACT_APP_API_KEY;

export const handleDeleteOpinion = async (id) => {
  try {
    await axios.delete(`${HOST}/opinions/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    setTimeout(() => PopUpOpinions("Dane zostały usunięte"), 500);
  } catch (error) {
    console.log(error);
  }
};
