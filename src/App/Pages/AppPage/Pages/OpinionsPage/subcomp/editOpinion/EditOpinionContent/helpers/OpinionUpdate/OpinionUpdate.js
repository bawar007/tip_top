import axios from "axios";
import { PopUpOpinions } from "../PopUp/PopUp";

export const OpinionUpdate = async (email, textO, starsO, HOST) => {
  try {
    await axios.patch(`${HOST}/opinions/${email}`, {
      text: textO,
      stars: starsO,
    });
    setTimeout(() => PopUpOpinions("Dane zostały zaktualizowane"), 500);
  } catch (error) {
    console.log(error);
  }
};
