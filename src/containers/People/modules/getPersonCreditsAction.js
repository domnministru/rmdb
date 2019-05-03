import axios from "axios";
import {KEY} from "../../../key";
import {DEFAULT_URL} from "../../../const";

export const GET_PERSON_CREDITS_BEGIN = "GET_PERSON_CREDITS_BEGIN";
export const GET_PERSON_CREDITS_SUCCESS = "GET_PERSON_CREDITS_SUCCESS";
export const GET_PERSON_CREDITS_FAILURE = "GET_PERSON_CREDITS_FAILURE";

export const getPersonCreditsBegin = () => ({
    type: GET_PERSON_CREDITS_BEGIN
});

export const getPersonCreditsSuccess = payload => ({
    type: GET_PERSON_CREDITS_SUCCESS,
    payload
});

export const getPersonCreditsFailure = error => ({
    type: GET_PERSON_CREDITS_FAILURE,
    error
});

export const getPersonCredits = (id) => {
    return dispatch => {
        dispatch(getPersonCreditsBegin());
        axios.get(`${DEFAULT_URL}person/${id}/combined_credits?language=en-US&api_key=${KEY}`)
            .then(result => {
                dispatch(getPersonCreditsSuccess(result.data));
            })
            .catch(error => dispatch(getPersonCreditsFailure()));
    }
};