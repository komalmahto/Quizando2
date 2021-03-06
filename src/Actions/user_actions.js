import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";
import { USER_SERVER } from "../config.js";

export function registerUser(dataToSubmit) {
  console.log("aya actions register ");
  const request = axios
    .post(`${USER_SERVER}/signup`, dataToSubmit)
    .then((response) => response.data);
  console.log(request);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);
  console.log(request);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export async function auth() {
  const request = await axios
    .get(`${USER_SERVER}/user`)
    .then((response) => response.data);
  console.log(request);
  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
export default registerUser;
