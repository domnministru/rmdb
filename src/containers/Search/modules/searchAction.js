import axios from 'axios/index';
import {KEY} from "../../../key";
import {DEFAULT_URL} from "../../../const";


export const SEARCH_ALL_BEGIN = 'SEARCH_ALL_BEGIN';
export const SEARCH_ALL_SUCCESS = 'SEARCH_ALL_SUCCESS';
export const SEARCH_ALL_FAILURE = 'SEARCH_ALL_FAILURE';

export const searchAllBegin = () => ({
    type: SEARCH_ALL_BEGIN
});

export const searchAllSuccess = suggestions => ({
    type: SEARCH_ALL_SUCCESS,
    suggestions
});

export const searchAllFailure = error => ({
    type: SEARCH_ALL_FAILURE,
    error
});

export const searchAll = (query) => {
    return dispatch => {
        let url = DEFAULT_URL + `search/multi?api_key=` + KEY + `&language=en-US&query=` + query + `&page=1&include_adult=false`;
        dispatch(searchAllBegin());
            axios.get(url)
            .then(result => {
                dispatch(searchAllSuccess(result.data.results));
            })
            .catch(error => dispatch(searchAllFailure()));
    };
};

