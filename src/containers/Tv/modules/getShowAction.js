import axios from 'axios';
import {DEFAULT_URL} from "../../../const";
import {KEY} from "../../../key";

export const GET_SPECIFIC_SHOW_BEGIN = 'GET_SPECIFIC_SHOW_BEGIN';
export const GET_SPECIFIC_SHOW_SUCCESS = 'GET_SPECIFIC_SHOW_SUCCESS';
export const GET_SPECIFIC_SHOW_FAILURE = 'GET_SPECIFIC_SHOW_FAILURE';

export const getSpecificShowBegin = () => ({
    type: GET_SPECIFIC_SHOW_BEGIN
});

export const getSpecificShowSuccess = show => ({
    type: GET_SPECIFIC_SHOW_SUCCESS,
    show
});

export const getSpecificShowFailure = error => ({
    type: GET_SPECIFIC_SHOW_FAILURE,
    error
});

export const getSpecificShow = (id) => {
    return dispatch => {
        dispatch(getSpecificShowBegin());
        axios.get(`${DEFAULT_URL}tv/${id}?language=en-US&api_key=${KEY}`)
            .then(result => {
                dispatch(getSpecificShowSuccess(result.data));
            })
            .catch(error => dispatch(getSpecificShowFailure()));
    };
};