import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import PageHeader from "../components/PageHeader";
import HomePage from "./Home/HomePage";
import PageFooter from "../components/PageFooter"
import NowPlayingPage from "./Tickets/NowPlayingPage";
import Ticket from "./Tickets/Ticket";
import MoviesList from "./Movies/MoviesList";
import MovieDetails from "./Movies/MoviePage";
import ShowList from "./Tv/TvList";
import TvDetails from "./Tv/TvPage";
import PeopleList from "./People/PeopleList";
import PeopleDetails from "./People/PersonPage";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn"
import "../App.scss";

const App = () => {
    return (
        <BrowserRouter>
            <PageHeader/>
            <main>
                <Route path="/" exact component={HomePage}/>
                <Route path="/ticket" exact component={NowPlayingPage}/>
                <Route path="ticket/:id" component={Ticket}/>
                <Route path="/movie" exact component={MoviesList}/>
                <Route path="/movie/:id" component={MovieDetails}/>
                <Route path="/tv" exact component={ShowList}/>
                <Route path="/tv/:id" component={TvDetails}/>
                <Route path="/person" exact component={PeopleList}/>
                <Route path="/person/:id" component={PeopleDetails}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/signIn" component={SignIn}/>
            </main>
            <PageFooter/>
        </BrowserRouter>
    )
};

export default App;
