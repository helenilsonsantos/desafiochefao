import axios from 'axios';


const Api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:4350'
});

Api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInBlcmZpbCI6ImFkbWluaXN0cmFkb3IiLCJzaXR1YWNhbyI6ImF0aXZvIiwiZW1wcmVzYV9pZCI6MTEsImlhdCI6MTY1NzQ3NjY5OX0.ufW7xCICL3OwrnPFWcV3kHhYs3x4o2XIE1B-8wLEWmk'

export { Api }