import {
    GET_VIDEOS_BEGIN,
    GET_VIDEOS_SUCCESS,
    GET_VIDEOS_FAILURE
} from "../actions/getVideosAction";

const initialState = {
    videos: [],
    loading: false,
    error: null
};

const getVideosReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.videos
            };

        case GET_VIDEOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default getVideosReducer;