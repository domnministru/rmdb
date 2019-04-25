import {
    GET_POPULAR_SHOWS_BEGIN,
    GET_POPULAR_SHOWS_SUCCESS,
    GET_POPULAR_SHOWS_FAILURE
} from "./getShowsAction";

const initialState = {
    shows: [],
    loading: false,
    error: null
};

const getShowsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POPULAR_SHOWS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_POPULAR_SHOWS_SUCCESS:
            return {
                ...state,
                loading: false,
                shows: action.shows
            };

        case GET_POPULAR_SHOWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                shows: []
            };

        default:
            return state;
    }
};

export default getShowsReducer;