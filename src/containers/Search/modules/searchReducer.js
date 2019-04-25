import {
    SEARCH_ALL_BEGIN,
    SEARCH_ALL_SUCCESS,
    SEARCH_ALL_FAILURE, SET_SEARCH_RESULTS_VISIBILITY
} from "./searchAction";

const initialState = {
    suggestions: [],
    loading: false,
    error: null,
    isSearchResultsVisible: false,
    //suggestions true/false
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
            };
        case SET_SEARCH_RESULTS_VISIBILITY:
            return {
                ...state,
                isSearchResultsVisible: action.isSearchResultsVisible,
            };

        default:
            return state;
    }
};

export default searchReducer;