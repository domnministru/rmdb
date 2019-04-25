import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import PageHeader from "../components/PageHeader";
import HomePage from "./Home/HomePage";
import DiscoverPage from "./Discover/DiscoverPage";
import PageFooter from "../components/PageFooter"

import MoviesList from './Movies/MoviesList';
import MovieDetails from "./Movies/MovieDetails";
import ShowList from "./Tv/TvList";
import TvDetails from "./Tv/TvDetails";
import PeopleList from "./People/PeopleList";
import PeopleDetails from "./People/PersonDetails";

import "../styles/base/_base.scss";
import "../App.scss";

const App = () => {
    return (
        <BrowserRouter>
            <PageHeader/>
            <main>
            <Route path="/" exact component={HomePage}/>
            <Route path="/discover" component={DiscoverPage}/>
            <Route path="/movies" exact component={MoviesList}/>
            <Route path="/movies/:id" component={MovieDetails}/>
            <Route path="/tv" exact component={ShowList}/>
            <Route path="/tv/:id" component={TvDetails}/>
            <Route path="/people" exact component={PeopleList}/>
            <Route path="/people/:id" component={PeopleDetails}/>
            </main>
            <PageFooter/>
        </BrowserRouter>
    )
};

export default App;
