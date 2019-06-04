import axios from 'axios/index';
import {KEY} from "../../../key";
import {DEFAULT_URL} from "../../../const";

export const GET_POPULAR_SHOWS_BEGIN = 'GET_POPULAR_SHOWS_BEGIN';
export const GET_POPULAR_SHOWS_SUCCESS = 'GET_POPULAR_SHOWS_SUCCESS';
export const GET_POPULAR_SHOWS_FAILURE = 'GET_POPULAR_SHOWS_FAILURE';

export const getPopularShowsBegin = () => ({
    type: GET_POPULAR_SHOWS_BEGIN
});

export const getPopularShowsSuccess = shows => ({
    type: GET_POPULAR_SHOWS_SUCCESS,
    shows
});

export const getPopularShowsFailure = error => ({
    type: GET_POPULAR_SHOWS_FAILURE,
    error
});

export const getPopularShows = (value="popular") => {
    return dispatch => {
        dispatch(getPopularShowsBegin());
        axios.get(`${DEFAULT_URL}tv/${value}?api_key=${KEY}&language=en-US&page=1`)
            .then(result => {
                dispatch(getPopularShowsSuccess(result.data.results));
            })
            .catch(error => dispatch(getPopularShowsFailure()));
    };
};
