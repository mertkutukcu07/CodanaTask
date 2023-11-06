import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const getAllProducts = () => axios.get(`${BASE_URL}/products`);
