import axios from 'axios'

const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY

const api = axios.create({
    baselURL: 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0',
    timeout: 1000,
    headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});

export default api