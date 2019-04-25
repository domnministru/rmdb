import {
    GET_SPECIFIC_MOVIE_BEGIN,
    GET_SPECIFIC_MOVIE_SUCCESS,
    GET_SPECIFIC_MOVIE_FAILURE,
} from "./getMovieAction";

const initialState = {
    movie: {
        poster_path: null,
        backdrop_path: null,
        genres: [],
        production_companies: [],
        production_countries: [],
        spoken_languages: [],
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
            };

        default:
            return state;
    }
};

export default getMovieReducer;