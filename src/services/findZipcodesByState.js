import api from './api.js'

export const findZipcodesByState = async (state) => {
    try {
        const res = await api.get(`/GetAllZipCodes?state=${state}&country=US`);
        return res.data;
    } catch(error){
        throw new Error(`Finding cities by zipcode failed: ${error.message}`)
    }
}