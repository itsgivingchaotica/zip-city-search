import api from './api.js'

export const findCitiesByZipcode = async (zipCode) => {
    try {
        const res = await api.get(`/GetZipCodeDetails/${zipCode}`);
        return res.data;
    } catch(error){
        throw new Error(`Finding cities by zipcode failed: ${error.message}`)
    }
}