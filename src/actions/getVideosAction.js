import axios from "axios"
import {KEY} from "../key";
import {DEFAULT_URL} from "../const";

export const GET_VIDEOS_BEGIN = "GET_VIDEOS_BEGIN";
export const GET_VIDEOS_SUCCESS = "GET_VIDEOS_SUCCESS";
export const GET_VIDEOS_FAILURE = "GET_VIDEOS_FAILURE";

export const getVideosBegin = () => ({
    type: GET_VIDEOS_BEGIN
});

export const getVideosSuccess = videos => ({
    type: GET_VIDEOS_SUCCESS,
    videos
});

export const getVideosFailure = error => ({
    type: GET_VIDEOS_FAILURE,
    error
});

export const getVideos = (content_type, id) => {
    return dispatch => {
        dispatch(getVideosBegin());
        axios.get(`${DEFAULT_URL}${content_type}/${id}/videos?language=en-US&api_key=${KEY}`)
            .then(result => {
                dispatch(getVideosSuccess(result.data.results));
            })
            .catch(error => dispatch(getVideosFailure()))
    }
};