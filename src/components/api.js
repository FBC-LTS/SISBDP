import axios from 'axios';

const api = {
  getToken: async (email, password) => {
  const response = await axios.get(`https://sisbdpapi-production.up.railway.app/token?email=${email}&senha=${password}`).then((response) => {
    console.log(response.data['token']);
    return response.data['token'];
  }).catch((error) => {
    console.error(error);
    throw error;
  });
}};

export default api;