"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieQuoteById = exports.getMovieQuote = exports.getMovieByIdQuote = exports.getMovieById = exports.getMovies = exports.setApiKey = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const API_URL = process.env.API_URL || 'https://the-one-api.dev/v2';
axios_1.default.defaults.baseURL = API_URL;
// Set the API key for all requests
function setApiKey(id) {
    axios_1.default.defaults.headers.common = { Authorization: `bearer ${id}` };
}
exports.setApiKey = setApiKey;
// Get all movies
function getMovies() {
    return new Promise((resolve) => {
        axios_1.default
            .get(`/movie`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch((err) => {
            resolve(err.response.data);
        });
    });
}
exports.getMovies = getMovies;
// Get a movie by ID
function getMovieById(id) {
    return new Promise((resolve) => {
        axios_1.default
            .get(`/movie/${id}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch((err) => {
            resolve(err.response.data);
        });
    });
}
exports.getMovieById = getMovieById;
// Get a specific quote from a movie by ID
function getMovieByIdQuote(id) {
    return new Promise((resolve) => {
        axios_1.default
            .get(`/movie/${id}/quote`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch((err) => {
            resolve(err.response.data);
        });
    });
}
exports.getMovieByIdQuote = getMovieByIdQuote;
//Get a quote
function getMovieQuote() {
    return new Promise((resolve) => {
        axios_1.default
            .get(`/quote`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch((err) => {
            resolve(err.response.data);
        });
    });
}
exports.getMovieQuote = getMovieQuote;
//Get a quote by ID
function getMovieQuoteById(id) {
    return new Promise((resolve) => {
        axios_1.default
            .get(`/quote/${id}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch((err) => {
            resolve(err.response.data);
        });
    });
}
exports.getMovieQuoteById = getMovieQuoteById;
exports.default = {
    setApiKey,
    getMovies,
    getMovieById,
    getMovieByIdQuote,
    getMovieQuote,
    getMovieQuoteById,
};
