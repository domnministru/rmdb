import axios from 'axios/index';
import {KEY} from "../../../key";
import {DEFAULT_URL} from "../../../const"

export const GET_MOVIES_BEGIN = 'GET_MOVIES_BEGIN';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export const getMoviesBegin = () => ({
    type: GET_MOVIES_BEGIN
});

export const getMoviesSuccess = data => ({
    type: GET_MOVIES_SUCCESS,
    data
});

export const getMoviesFailure = error => ({
    type: GET_MOVIES_FAILURE,
    error
});

export const getMovies = (value="popular") => {
    return dispatch => {
        dispatch(getMoviesBegin());
        axios.get(`${DEFAULT_URL}movie/${value}?api_key=${KEY}&language=en-US&page=1`)
            .then(result => {
                dispatch(getMoviesSuccess(result.data.results));
            })
            .catch(error => dispatch(getMoviesFailure()));
    };
};
