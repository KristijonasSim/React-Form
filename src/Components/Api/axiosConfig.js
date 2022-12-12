import axios from 'axios';

export const dummyURL = axios.create({
  baseURL: "https://dummyjson.com",
});

