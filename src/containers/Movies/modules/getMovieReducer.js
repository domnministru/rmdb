import {
    GET_SPECIFIC_MOVIE_BEGIN,
    GET_SPECIFIC_MOVIE_SUCCESS,
    GET_SPECIFIC_MOVIE_FAILURE,
} from "./getMovieAction";

const initialState = {
    movie: {
        genres: [],
        production_companies: [],
        production_countries: [],
        poster_path: '',
    },
    loading: false,
    error: null
};

const getMovieReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SPECIFIC_MOVIE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_SPECIFIC_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.movie
            };

        case GET_SPECIFIC_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                movie: {}
            };

        default:
            return state;
    }
};

export default getMovieReducer;