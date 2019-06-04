import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./containers/App";

import "./App.scss"

import moviesReducer from "./containers/Movies/modules/MoviesReducer";
import movieReducer from "./containers/Movies/modules/MovieReducer";
import peopleReducer from "./containers/People/modules/PeopleReducer";
import personReducer from "./containers/People/modules/PersonReducer";
import personCreditsReducer from "./containers/People/modules/PersonCreditsReducer";
import showsReducer from "./containers/Tv/modules/ShowsReducer";
import showReducer from "./containers/Tv/modules/ShowReducer";
import searchReducer from "./containers/Search/modules/SearchReducer";
import creditsReducer from "./reducers/CreditsReducer";
import videosReducer from "./reducers/VideosReducer";
import imagesReducer from "./reducers/ImagesReducer";
import nowPlayingReducer from "./containers/Tickets/modules/NowPlayingReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        movies: moviesReducer,
        movie: movieReducer,
        people: peopleReducer,
        person: personReducer,
        personCredits: personCreditsReducer,
        shows: showsReducer,
        show: showReducer,
        suggestions: searchReducer,
        credits: creditsReducer,
        videos: videosReducer,
        images: imagesReducer,
        playing: nowPlayingReducer,
    }),
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root")
);