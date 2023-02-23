import axios from "../utils/baseAxios";

const baseURL = "user";
const getUser = async () => {
  return await axios.get(`${baseURL}`);
};

const postUser = async (user) => {
  return await axios.post(`${baseURL}`, user);
};

const deleteUser = async (id) => {
  return await axios.delete(`${baseURL}/${id}`);
};

const updateUser = async (id, user) => {
  return await axios.patch(`${baseURL}/${id}`, user);
};
const getUserById = async (id) => {
  return await axios.get(`${baseURL}/${id}`);
};
export { getUser, postUser, deleteUser, updateUser, getUserById };
