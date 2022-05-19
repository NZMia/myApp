import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

console.info('API_URL', API_URL);

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
