import {
    GET_NOW_PLAYING_BEGIN,
    GET_NOW_PLAYING_SUCCESS,
    GET_NOW_PLAYING_FAILURE
} from "./NowPlayingAction";

const initialState = {
    playing: [],
    loading: false,
    error: null
};

const nowPlayingReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NOW_PLAYING_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_NOW_PLAYING_SUCCESS:
            return {
                ...state,
                loading: false,
                playing: action.playing
            };

        case GET_NOW_PLAYING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default nowPlayingReducer;