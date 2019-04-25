import axios from 'axios';
import {DEFAULT_URL} from "../../../const";
import {KEY} from "../../../key";

export const GET_SPECIFIC_PERSON_BEGIN = 'GET_SPECIFIC_PERSON_BEGIN';
export const GET_SPECIFIC_PERSON_SUCCESS = 'GET_SPECIFIC_PERSON_SUCCESS';
export const GET_SPECIFIC_PERSON_FAILURE = 'GET_SPECIFIC_PERSON_FAILURE';

export const getSpecificPersonBegin = () => ({
    type: GET_SPECIFIC_PERSON_BEGIN
});

export const getSpecificPersonSuccess = payload => ({
    type: GET_SPECIFIC_PERSON_SUCCESS,
    payload
});

export const getSpecificPersonFailure = error => ({
    type: GET_SPECIFIC_PERSON_FAILURE,
    error
});

export const getSpecificPerson = (id) => {
    return dispatch => {
        dispatch(getSpecificPersonBegin());
        axios.get(`${DEFAULT_URL}person/${id}?language=en-US&api_key=${KEY}`)
            .then(result => {
                dispatch(getSpecificPersonSuccess(result.data));
            })
            .catch(error => dispatch(getSpecificPersonFailure()));
    };
};