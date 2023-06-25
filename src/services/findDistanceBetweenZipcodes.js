import api from './api.js'

export const findDistanceBetweenZipcodes = async (state) => {
    try {
        const res = await api.get(`/CalculateDistance/ByZip?fromzipcode=${startZipCode}&tozipcode=${endZipcode}`);
        return res.data;
    } catch(error){
        throw new Error(`Finding cities by zipcode failed: ${error.message}`)
    }
}