import axios from 'axios'

export async function fetchZips(event) {
  const { state } = event.body;

  try {
    const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY;
    const response = await axios.get(`/GetAllZipCodes?state=${state}&country=US&key=${apiKey}`);
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