import React from "react";
import SingleBox from "../../components/SingleBox";
import Genres from "../../components/Genres";
import MovieCountries from "./MovieCountries";
import Companies from "../../components/Companies";
import MovieLanguages from "./MovieLanguages";


const MovieBox = props => {
    let {
        title, tagline, runtime, status, release, rating, budget,
        revenue, original_title, original_language, homepage, imdb_id, popularity,
        genres, production_companies, production_countries, spoken_languages
    } = props;

    return(
        <div className="movie-box">
            <SingleBox name={"Title: "} content={title}/>
            <SingleBox name={"Tagline: "} content={tagline}/>
            <SingleBox name={"Runtime(min): "} content={runtime}/>
            <SingleBox name={"Status: "} content={status}/>
            <SingleBox name={"Released: "} content={release}/>
            <SingleBox name={"Rating: "} content={rating}/>
            <SingleBox name={"Budget: "} content={budget}/>
            <SingleBox name={"Revenue: "} content={revenue}/>
            <SingleBox name={"Original Title: "} content={original_title}/>
            <SingleBox name={"Original Language: "} content={original_language}/>
            <SingleBox name={"Homepage: "} content={homepage}/>
            <SingleBox name={"IMDB ID: "} content={imdb_id}/>
            <SingleBox name={"Popularity: "} content={popularity}/>
            <Genres genres={genres}/>
            <MovieCountries countries={production_countries}/>
            <Companies companies={production_companies}/>
            <MovieLanguages languages={spoken_languages}/>
        </div>
    )
};

export default MovieBox;