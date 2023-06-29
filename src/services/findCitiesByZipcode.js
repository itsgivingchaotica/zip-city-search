import axios from 'axios';

//CONNECT TO FETCHCITY NETLIFY FUNCTION, PASSING THE ZIPCODE TO THE FILE VIA AXIOS.POST
const findCitiesByZipcode = async (zipCode) => {
  try {
    const response = await axios.get('/.netlify/functions/fetchCity?zipCode=${zipCode}', { 
        zipCode: zipCode 
    });

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