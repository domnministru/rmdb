import {
    GET_POPULAR_PEOPLE_BEGIN,
    GET_POPULAR_PEOPLE_SUCCESS,
    GET_POPULAR_PEOPLE_FAILURE
} from "./PeopleAction";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POPULAR_PEOPLE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_POPULAR_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };

        case GET_POPULAR_PEOPLE_FAILURE:
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

export default peopleReducer;