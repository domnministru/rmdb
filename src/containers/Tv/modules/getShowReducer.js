import {
    GET_SPECIFIC_SHOW_BEGIN,
    GET_SPECIFIC_SHOW_SUCCESS,
    GET_SPECIFIC_SHOW_FAILURE,
} from "./getShowAction";

const initialState = {
    show: {
        genres: [],
        content: [],
        production_companies: [],
        production_countries: [],
        poster_path: '',
    },
    loading: false,
    error: null
};

const getShowReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SPECIFIC_SHOW_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_SPECIFIC_SHOW_SUCCESS:
            return {
                ...state,
                loading: false,
                show: action.show
            };

        case GET_SPECIFIC_SHOW_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                show: {}
            };

        default:
            return state;
    }
};

export default getShowReducer;