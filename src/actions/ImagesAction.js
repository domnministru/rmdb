import axios from "axios"
import {KEY} from "../key";
import {DEFAULT_URL} from "../const";

export const GET_IMAGES_BEGIN = "GET_IMAGES_BEGIN";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILURE = "GET_IMAGES_FAILURE";

export const getImagesBegin = () => ({
    type: GET_IMAGES_BEGIN
});

export const getImagesSuccess = images => ({
    type: GET_IMAGES_SUCCESS,
    images
});

export const getImagesFailure = error => ({
    type: GET_IMAGES_FAILURE,
    error
});

export const getImages = (content_type, id) => {
    return dispatch => {
        dispatch(getImagesBegin());
        axios.get(`${DEFAULT_URL}${content_type}/${id}/images?api_key=${KEY}`)
            .then(result => {
                dispatch(getImagesSuccess(result.data));
            })
            .catch(error => dispatch(getImagesFailure()))
    }
};