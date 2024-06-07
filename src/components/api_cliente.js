import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  getClientes: async () => {
    const token = AsyncStorage.getItem('userToken');
    const response = await axios.get(`https://sisbdpapi-production.up.railway.app/clientes.json?token=${token}`).then((response) => {
    console.log(response.data['token']);
    return response.data['token'];
  }).catch((error) => {
    console.error(error);
    throw error;
  });
}});

export default api;
