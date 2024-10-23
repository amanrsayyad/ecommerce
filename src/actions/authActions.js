// actions/authActions.js
import axios from "axios";
import {
  register as registerAction,
  login as loginAction,
  logout as logoutAction,
} from "../reducers/authReducer";

const BASE_URL = "https://ecom-backend-ruddy-ten.vercel.app/";

export const register = (username, email, password) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/register`, {
    username,
    email,
    password,
  });
  const token = response.data.token;
  localStorage.setItem("token", token);
  dispatch(registerAction(token));
};

export const login = (email, password) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });
  const token = response.data.token;
  localStorage.setItem("token", token);
  dispatch(loginAction(token));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutAction());
};
