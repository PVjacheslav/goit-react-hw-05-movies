import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '3a8b38ad10d0523ba714a93ac8f26385'

export const fetchTrending = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchSearchKeyword = async keyword => {
    const response = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
    );
    return response.data;
};

export const fetchMovieDetails = async movieId => {
    const response = await axios.get(
        `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
};

export const fetchActors = async movieId => {
    const response = await axios.get(
        `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
};

export const fetchReviews = async movieId => {
    const response = await axios.get(
        `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
};
