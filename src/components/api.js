import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sisbdpapi-production.up.railway.app/',
});

export default api;
