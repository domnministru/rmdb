import {
    GET_MOVIES_BEGIN,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE
} from "./MoviesAction";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };

        case GET_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default moviesReducer;