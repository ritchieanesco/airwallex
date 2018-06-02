import axios from "axios";

export const sendForm = (name, email) =>
  axios({
    method: "post",
    url:
      "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
    data: { name, email }
  });
