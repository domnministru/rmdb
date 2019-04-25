import axios from 'axios';
import {DEFAULT_URL} from "../../../const";
import {KEY} from "../../../key";

export const GET_SPECIFIC_MOVIE_BEGIN = 'GET_SPECIFIC_MOVIE_BEGIN';
export const GET_SPECIFIC_MOVIE_SUCCESS = 'GET_SPECIFIC_MOVIE_SUCCESS';
export const GET_SPECIFIC_MOVIE_FAILURE = 'GET_SPECIFIC_MOVIE_FAILURE';

export const getSpecificMovieBegin = () => ({
    type: GET_SPECIFIC_MOVIE_BEGIN
});

export const getSpecificMovieSuccess = movie => ({
    type: GET_SPECIFIC_MOVIE_SUCCESS,
    movie
});

export const getSpecificMovieFailure = error => ({
    type: GET_SPECIFIC_MOVIE_FAILURE,
    error
});

export const getSpecificMovie = (id) => {
    return dispatch => {
        dispatch(getSpecificMovieBegin());
        axios.get(`${DEFAULT_URL}movie/${id}?language=en-US&api_key=${KEY}`)
            .then(result => {
                dispatch(getSpecificMovieSuccess(result.data));
            })
            .catch(error => dispatch(getSpecificMovieFailure()));
    };
};