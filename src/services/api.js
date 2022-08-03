import axios from 'axios';

const api = axios.create({
  baseURL: 'https://62c705752b03e73a58dd8ffd.mockapi.io/'
})

export default api