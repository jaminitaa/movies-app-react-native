import { BASE_URL, APP_KEY } from '../config/api_config';
import axios from 'axios'

export const getMoviesResults = async (filterType) => {
    const response = await axios.get(`${BASE_URL}/movie/${filterType}?api_key=${APP_KEY}`)
    return response.data.results
}

export const getTvShowsResults = async (filterType) => {
    const response = await axios.get(`${BASE_URL}/tv/${filterType}?api_key=${APP_KEY}`)
    return response.data.results
}

export const getSearchResults = async (filterType, search) => {
    const response = await axios.get(`${BASE_URL}/search/${filterType}?api_key=${APP_KEY}&query=${search}`)
    return response.data.results
}
