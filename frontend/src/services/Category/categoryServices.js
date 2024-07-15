import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

//get token
const token = getUserFromStorage();

//!ADDCATEGORY API
export const addCategoryAPI = async (credentials) => {
  const response = await axios.post(
    `${BASE_URL}/categories/create`,
    {
      //you can get this url from our previous practise in  postman app
      name: credentials.name,
      type: credentials.type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //RETURN A PROMISE
  return response.data;
};

//!LISTCATEGORIES  API
export const listCategoriesAPI = async () => {
  const response = await axios.get(`${BASE_URL}/categories/lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  //RETURN A PROMISE
  return response.data;
};

//!UPDATECATEGORY API
export const updateCategoryAPI = async (credentials) => {
  const response = await axios.put(
    `${BASE_URL}/categories/update/${credentials.id}`,
    {
      //you can get this url from our previous practise in  postman app
      name: credentials.name,
      type: credentials.type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //RETURN A PROMISE
  return response.data;
};

//!DELETECATEGORY API
export const deleteCategoryAPI = async (id) => {
  const response = await axios.delete(
    `${BASE_URL}/categories/delete/${id}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //RETURN A PROMISE
  return response.data;
};
