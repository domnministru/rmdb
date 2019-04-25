import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./containers/App";

import "./App.scss"

import getMoviesReducer from "./containers/Movies/modules/getMoviesReducer";
import getMovieReducer from "./containers/Movies/modules/getMovieReducer";
import peopleReducer from "./containers/People/modules/peopleReducer";
import personReducer from "./containers/People/modules/personReducer";
import getShowsReducer from "./containers/Tv/modules/getShowsReducer";
import getShowReducer from "./containers/Tv/modules/getShowReducer";
import searchReducer from "./containers/Search/modules/searchReducer";
import getCreditsReducer from "./reducers/getCreditsReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        movies: getMoviesReducer,
        movie: getMovieReducer,
        people: peopleReducer,
        person: personReducer,
        shows: getShowsReducer,
        show: getShowReducer,
        suggestions: searchReducer,
        credits: getCreditsReducer,
    }),
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root")
);