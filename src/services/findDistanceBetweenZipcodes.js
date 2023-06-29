import api from './api.js'
// import apiKey from './apiKey.js'

const apiKey = import.meta.env.VITE_ZIP_CODE_API_KEY

const findDistanceBetweenZipcodes = async (startZipcode,endZipcode) => {
    try {
        const res = await api.get(`/CalculateDistance/ByZip?fromzipcode=${startZipcode}&tozipcode=${endZipcode}&key=${apiKey}`);
        return res.data;
    } catch(error){
        throw error;
    }
}

export default findDistanceBetweenZipcodes