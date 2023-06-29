import axios from 'axios'

export async function fetchDistance(event) {
  const { startZipCode, endZipCode } = event.body;

  try {
    const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY;
    const response = await axios.get(`/CalculateDistance/ByZip?fromzipcode=${startZipCode}&tozipcode=${endZipCode}&key=${apiKey}`);
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