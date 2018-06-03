import axios from "axios";

const apiUrl =
  "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

export const sendForm = (name, email) => axios.post(apiUrl, { name });
