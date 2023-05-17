import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const API_URL = process.env.API_URL || 'https://the-one-api.dev/v2';
axios.defaults.baseURL = API_URL;

// Set the API key for all requests
export function setApiKey(id: string): void {
  axios.defaults.headers.common = { Authorization: `bearer ${id}` };
}

// Get all movies
export function getMovies(): Promise<object> {
  return new Promise((resolve) => {
    axios
      .get(`/movie`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        resolve(err.response.data);
      });
  });
}

// Get a movie by ID
export function getMovieById(id: string) {
  return new Promise((resolve) => {
    axios
      .get(`/movie/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        resolve(err.response.data);
      });
  });
}

// Get a specific quote from a movie by ID
export function getMovieByIdQuote(id: string) {
  return new Promise((resolve) => {
    axios
      .get(`/movie/${id}/quote`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        resolve(err.response.data);
      });
  });
}

//Get a quote
export function getMovieQuote() {
  return new Promise((resolve) => {
    axios
      .get(`/quote`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        resolve(err.response.data);
      });
  });
}

//Get a quote by ID

export function getMovieQuoteById(id: string) {
  return new Promise((resolve) => {
    axios
      .get(`/quote/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        resolve(err.response.data);
      });
  });
}

export default {
  setApiKey,
  getMovies,
  getMovieById,
  getMovieByIdQuote,
  getMovieQuote,
  getMovieQuoteById,
};
