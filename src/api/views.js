import axios from "axios";
import { statServer } from "../config";

export const getViews = async (period) => {
  return await axios.post(`${statServer}/views`, { period });
};
