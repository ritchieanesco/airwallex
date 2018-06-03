export const emailValidation = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email !== "" && re.test(email);
};

export const nameValidation = name => name.length < 3;

export const isSame = (...args) =>
  args.reduce(function(a, b) {
    return a === b ? a : NaN;
  });
