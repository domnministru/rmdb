import axios from 'axios/index';
import {KEY} from "../../../key";
import {DEFAULT_URL} from "../../../const"

export const GET_POPULAR_MOVIES_BEGIN = 'GET_POPULAR_MOVIES_BEGIN';
export const GET_POPULAR_MOVIES_SUCCESS = 'GET_POPULAR_MOVIES_SUCCESS';
export const GET_POPULAR_MOVIES_FAILURE = 'GET_POPULAR_MOVIES_FAILURE';

export const getPopularMoviesBegin = () => ({
    type: GET_POPULAR_MOVIES_BEGIN
});

export const getPopularMoviesSuccess = data => ({
    type: GET_POPULAR_MOVIES_SUCCESS,
    data
});

export const getPopularMoviesFailure = error => ({
    type: GET_POPULAR_MOVIES_FAILURE,
    error
});

export const getPopularMovies = () => {
    return dispatch => {
        dispatch(getPopularMoviesBegin());
        axios.get(`${DEFAULT_URL}movie/popular?api_key=${KEY}&language=en-US&page=1`)
            .then(result => {
                dispatch(getPopularMoviesSuccess(result.data.results));
            })
            .catch(error => dispatch(getPopularMoviesFailure()));
    };
};
