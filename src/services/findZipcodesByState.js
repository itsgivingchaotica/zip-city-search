import axios from 'axios';

// CONNECT TO FETCHZIPS NETLIFY FUNCTION, PASSING THE USA STATE TO THE FILE VIA AXIOS.GET
const findZipcodesByState = async (state) => {
  try {
    const response = await axios.post(`/.netlify/functions/fetchZips?state=${state}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('An error occurred while fetching data');
    }
  } catch (error) {
    throw error;
  }
};

export default findZipcodesByState;