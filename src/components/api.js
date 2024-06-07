import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sisbdpapi-production.up.railway.app', // Substitua pelo seu endereço da API
});

api.getToken = async (email, senha) => {
  try {
    const response = await api.get('/token', {
      'email':email,
      'senha':senha,
    });
    return response.data['token']; //Assumindo que a API retorna um objeto com a chave 'token'
  } catch (error) {
    console.error('Error fetching token:', error);
    throw new Error('Failed to fetch token');
  }
};
api.getClientes = async (token) => {
  try {
    const response = await api.get('/clientes.json', {
      token
    });
    return response.data; // Assumindo que a API retorna um objeto com a chave 'token'
  } catch (error) {
    console.error('Error fetching token:', error);
    throw new Error('Failed to fetch token');
  }
};


export default api;