import axios from 'axios'

export async function fetchCity(event) {
  const { zipCode } = event.body;

  try {
    const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY;
    const response = await axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/${zipCode}?key=${apiKey}`);
    const data = response.data;

    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: 'An error occurred while fetching data' },
    };
  }
}