import {
    GET_PERSON_CREDITS_BEGIN,
    GET_PERSON_CREDITS_SUCCESS,
    GET_PERSON_CREDITS_FAILURE
} from "./PersonCreditsAction";

const initialState = {
    personCredits: {
        cast: [],
        crew: [],
        poster_path: null,
    },
    loading: false,
    error: null,
};

const personCreditsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PERSON_CREDITS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_PERSON_CREDITS_SUCCESS:
            return {
                ...state,
                loading: false,
                personCredits: action.payload
            };
        case  GET_PERSON_CREDITS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default personCreditsReducer;