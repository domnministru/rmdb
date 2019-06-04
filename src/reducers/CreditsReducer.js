import {
    GET_CREDITS_BEGIN,
    GET_CREDITS_SUCCESS,
    GET_CREDITS_FAILURE
} from "../actions/CreditsAction";

const initialState = {
    credits: {
        cast: []
    },
    loading: false,
    error: null
};

const creditsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CREDITS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_CREDITS_SUCCESS:
            return {
                ...state,
                loading: false,
                credits: action.credits
            };

        case GET_CREDITS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default creditsReducer;