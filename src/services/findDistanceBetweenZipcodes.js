import axios from 'axios';

// CONNECT TO FETCHDISTANCE NETLIFY FUNCTION, PASSING THE TWO ZIPCODES TO THE FILE VIA AXIOS.GET
const findDistanceBetweenZipcodes = async (startZipCode, endZipCode) => {
  try {
    const response = await axios.get(`/.netlify/functions/fetchDistance?startZipCode=${startZipCode}&endZipCode=${endZipCode}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('An error occurred while fetching data');
    }
  } catch (error) {
    throw error;
  }
};

export default findDistanceBetweenZipcodes;