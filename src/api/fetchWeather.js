import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6c70207825d73c1969dc5b19e207e4e7';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metrics',
            APPID: API_KEY
        }
    });

    return data;
}