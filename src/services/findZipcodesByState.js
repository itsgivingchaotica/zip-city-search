import api from './api.js'

const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY

const findZipcodesByState = async (state) => {
    try {
        const res = await api.get(`/GetAllZipCodes?state=${state}&country=US&key=${apiKey}`);
        return res.data;
    } catch(error){
        throw error;
    }
}

export default findZipcodesByState