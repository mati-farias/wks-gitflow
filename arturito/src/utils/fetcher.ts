import axios from 'axios';

// Possible alternative: 'https://swapi.dev/api'
// const baseURL = 'https://www.swapi.it/api';
const baseURL = 'https://swapi.dev/api';


export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);

export const pplGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data)
