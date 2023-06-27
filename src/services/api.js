import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0',
    timeout: 100000,
    headers: {
    'Content-Type': 'application/json',
  },
});

export default api