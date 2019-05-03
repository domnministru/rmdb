import axios from "axios";
import{KEY} from "../../../key";
import {DEFAULT_URL} from "../../../const";

export const GET_NOW_PLAYING_BEGIN = "GET_NOW_PLAYING_BEGIN";
export const GET_NOW_PLAYING_SUCCESS = "GET_NOW_PLAYING_SUCCESS";
export const GET_NOW_PLAYING_FAILURE = "GET_NOW_PLAYING_FAILURE";

export const getNowPlayingBegin = () => ({
    type: GET_NOW_PLAYING_BEGIN
});

export const getNowPlayingSuccess = playing => ({
    type: GET_NOW_PLAYING_SUCCESS,
    playing
});

export const getNowPlayingFailure = error => ({
    type: GET_NOW_PLAYING_FAILURE,
    error
});

export const getNowPlaying = () => {
    return dispatch => {
        dispatch(getNowPlayingBegin());
        axios.get(`${DEFAULT_URL}movie/now_playing?api_key=${KEY}&language=en-US&page=1&region=ru`)
            .then(result => {
                dispatch(getNowPlayingSuccess(result.data.results));
            })
            .catch(error => dispatch(getNowPlayingFailure()));
    };
};