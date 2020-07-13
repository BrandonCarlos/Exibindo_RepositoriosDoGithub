import axios from 'axios';

const api = axios.create({
  // Aki dentro iremos informar nossa BASE URL
  baseURL: 'http://api.github.com',
});

export default api;
