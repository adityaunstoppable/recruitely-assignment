import axios from "axios";
import { API_TOKEN, LIST_COMPANIES_URL } from "./constants";

export const fetchCompanies = async () => {
    try {
      const response = await axios.get(LIST_COMPANIES_URL);
      return response.data;
    } catch (error) {
      console.error(error);
      return 'Something went wrong'
    }
  };

