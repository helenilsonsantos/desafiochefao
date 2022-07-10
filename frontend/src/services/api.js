import axios from 'axios';


const Api = axios.create({
    baseURL: process.env.API_URL || 'https://techdental.herokuapp.com'
});

Api.defaults.headers.common['Authorization'] = ""

export { Api }
