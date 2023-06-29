import axios from 'axios';

const findCitiesByZipcode = async (zipCode) => {
  try {
    const response = await axios.post('/.netlify/functions/fetch-city', { zipCode });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('An error occurred while fetching data');
    }
  } catch (error) {
    throw error;
  }
};

export default findCitiesByZipcode;