const axios = require('axios');

export const openweather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
    // baseURL: 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid=5eeaf74c89fba8c289f70936e0bcaad7'
})