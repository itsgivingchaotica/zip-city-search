import axios from 'axios';

export async function handler(event) {
  const { zipCode } = JSON.parse(event.body);

  try {
    const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY;
    const response = await axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/${zipCode}?key=${apiKey}`);
    const data = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching data' }),
    };
  }
}