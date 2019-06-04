import {
    GET_SPECIFIC_PERSON_BEGIN,
    GET_SPECIFIC_PERSON_SUCCESS,
    GET_SPECIFIC_PERSON_FAILURE,
} from "./PersonAction";

const initialState = {
    person: {
        also_known_as: [],
    },
    loading: false,
    error: null
};

const personReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SPECIFIC_PERSON_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_SPECIFIC_PERSON_SUCCESS:
            return {
                ...state,
                loading: false,
                person: action.person
            };

        case GET_SPECIFIC_PERSON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default personReducer;