import api from './api.js'

const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY

const findCitiesByZipcode = async (zipCode) => {
    try { 
        const res = await api.get(`/GetZipCodeDetails/${zipCode}?key=${apiKey}`);
        return res.data;
    } catch(error){
        throw error;
    }
}

export default findCitiesByZipcode