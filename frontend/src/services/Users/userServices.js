import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
//get token
const token = getUserFromStorage();
//!LOGIN API
export const loginAPI = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    email: credentials.email,
    password: credentials.password,
  });
  //RETURN A PROMISE
  return response.data;
};

//!REGISTER API

export const registerAPI = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/users/register`, {
    email: credentials.email,
    password: credentials.password,
    username: credentials.username,
  });
  //RETURN A PROMISE
  return response.data;
};

//! CHANGE PASSWORD
export const changePasswordAPI = async (newPassword) => {
  const response = await axios.put(
    `${BASE_URL}/users/change-password`,
    {
      newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};

//! UPDATE PROFILE
export const updateProfileAPI = async ({ email, username }) => {
  const response = await axios.put(
    `${BASE_URL}/users/update-profile`,
    {
      email,
      username,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
