import {
    GET_POPULAR_MOVIES_BEGIN,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_FAILURE
} from "./getMoviesAction";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const getMoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POPULAR_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };

        case GET_POPULAR_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: []
            };

        default:
            return state;
    }
};

export default getMoviesReducer;