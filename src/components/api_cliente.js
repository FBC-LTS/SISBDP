import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sisbdpapi-production.up.railway.app', // Substitua pelo seu endereço da API
});

export default api;
