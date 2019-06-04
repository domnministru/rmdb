import {
    GET_SPECIFIC_SHOW_BEGIN,
    GET_SPECIFIC_SHOW_SUCCESS,
    GET_SPECIFIC_SHOW_FAILURE,
} from "./ShowAction";

const initialState = {
    show: {
        poster_path: null,
        backdrop_path: null,
        genres: [],
        languages: [],
        origin_country: [],
        production_companies: [],
        created_by: [],
        seasons: [],
        episode_run_time: [],
        networks: [],
    },
    loading: false,
    error: null
};

const showReducer = (state = initialState, action) => {
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
            };

        default:
            return state;
    }
};

export default showReducer;