import axios from "axios"
import {KEY} from "../key";
import {DEFAULT_URL} from "../const";

export const GET_CREDITS_BEGIN = "GET_CREDITS_BEGIN";
export const GET_CREDITS_SUCCESS = "GET_CREDITS_SUCCESS";
export const GET_CREDITS_FAILURE = "GET_CREDITS_FAILURE";

export const getCreditsBegin = () => ({
    type: GET_CREDITS_BEGIN
});

export const getCreditsSuccess = credits => ({
    type: GET_CREDITS_SUCCESS,
    credits
});

export const getCreditsFailure = error => ({
    type: GET_CREDITS_FAILURE,
    error
});

export const getCredits = (content_type, id) => {
    return dispatch => {
        dispatch(getCreditsBegin());
        axios.get(`${DEFAULT_URL}${content_type}/${id}/credits?api_key=${KEY}`)
            .then(result => {
                dispatch(getCreditsSuccess(result.data));
            })
            .catch(error => dispatch(getCreditsFailure()));
    };
};



