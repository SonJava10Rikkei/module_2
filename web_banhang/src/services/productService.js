import axios from "../utils/baseAxios";

const baseURL = "products";
const getProduct = async () => {
  return await axios.get(`${baseURL}`);
};

const postProduct = async (products) => {
  return await axios.post(`${baseURL}`, products);
};
export { getProduct, postProduct };
