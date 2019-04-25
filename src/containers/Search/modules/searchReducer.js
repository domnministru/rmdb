import {
    SEARCH_ALL_BEGIN,
    SEARCH_ALL_SUCCESS,
    SEARCH_ALL_FAILURE
} from "./searchAction";

const initialState = {
    suggestions: [],
    loading: false,
    error: null
    //showsuugestions true/false
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_ALL_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case SEARCH_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                suggestions: action.suggestions
            };

        case SEARCH_ALL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                suggestions: []
            };

        default:
            return state;
    }
};

export default searchReducer;