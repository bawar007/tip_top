import axios from "axios";
import { PopUpOpinions } from "../PopUp/PopUp";

export const handleDeleteOpinion = async (email, HOST) => {
  try {
    await axios.delete(`${HOST}/opinions/${email}`);
    setTimeout(() => PopUpOpinions("Dane zostały usunięte"), 500);
  } catch (error) {
    console.log(error);
  }
};
