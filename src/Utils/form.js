export const emailValidation = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email !== "" && re.test(email);
};

export const validateFields = fields =>
  Object.keys(fields).reduce(
    (previous, key) => {
      switch (key) {
        case "name":
          previous[key] = previous[key] = fields[key].length < 3;
          return previous;
        case "email":
          previous[key] = !emailValidation(fields[key]);
          return previous;
        case "confirmEmail":
          previous[key] =
            !emailValidation(fields["email"]) ||
            fields[key] !== fields["email"];
          return previous;
        default:
          return previous;
      }
    },
    { name: false, email: false, confirmEmail: false }
  );
