import {
    GET_IMAGES_BEGIN,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAILURE
} from "../actions/getImagesAction";

const initialState = {
    images: {
        backdrops: [],
        posters: []
    },
    loading: false,
    error: null
};

const getImagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_IMAGES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: action.images
            };

        case GET_IMAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default getImagesReducer;