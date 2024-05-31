import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://sisbdpapi-production.up.railway.app/', // Verifique se esta URL está correta
});

// Interceptor to add token to headers
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request URL:', config.url); // Adicione este log para depuração
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
