import axios from "axios";

const BASE_URL =
  "https://6703f65eab8a8f8927326dd5.mockapi.io/demo/api/products";
const ApiCalling = {
  getPosts: async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  },
  
};

export default ApiCalling;
