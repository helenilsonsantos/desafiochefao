import axios from 'axios';


const api = axios.create({
    baseURL: process.env.API_URL || 'https://techdental.herokuapp.com'
});

export default api; 
