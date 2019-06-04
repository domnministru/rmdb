import axios from 'axios/index';
import {KEY} from "../../../key";
import {DEFAULT_URL} from "../../../const"

export const GET_POPULAR_PEOPLE_BEGIN = 'GET_POPULAR_PEOPLE_BEGIN';
export const GET_POPULAR_PEOPLE_SUCCESS = 'GET_POPULAR_PEOPLE_SUCCESS';
export const GET_POPULAR_PEOPLE_FAILURE = 'GET_POPULAR_PEOPLE_FAILURE';

export const getPopularPeopleBegin = () => ({
    type: GET_POPULAR_PEOPLE_BEGIN
});

export const getPopularPeopleSuccess = data => ({
    type: GET_POPULAR_PEOPLE_SUCCESS,
    data
});

export const getPopularPeopleFailure = error => ({
    type: GET_POPULAR_PEOPLE_FAILURE,
    error
});

export const getPopularPeople = () => {
    return dispatch => {
        dispatch(getPopularPeopleBegin());
        axios.get(`${DEFAULT_URL}person/popular?api_key=${KEY}&language=en-US&page=1`)
            .then(result => {
                dispatch(getPopularPeopleSuccess(result.data.results));
            })
            .catch(error => dispatch(getPopularPeopleFailure()));
    };
};