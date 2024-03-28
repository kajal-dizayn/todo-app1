import { every, isEmpty } from "lodash";

export const validateEmail = (value: string) => {
  const emailRegex =
    // eslint-disable-next-line max-len, no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value) ? "" : "Please enter valid Email";
};

//this function will validate password
export const validatePassword = (password: string) => {
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return password.match(passwordRegex)
    ? ""
    : "password must contain at least 6 characters, including UPPER/lowercase and numbers";
};
export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    return "Password and confirm password does not match";
  }
  return "";
};
export const isEmptyErrors = (errors: object) =>
  every(errors, (value) => isEmpty(value));

export const validateUsername = (value: string) => {
  return value.length < 6 ? "Username must be at least 6 characters" : "";
};
