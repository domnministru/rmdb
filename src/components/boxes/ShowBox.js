import React from "react";
import SingleBox from "./SingleBox";
import Genres from "./Genres";
import Companies from "./Companies";
import TvLanguages from "./TvLanguages";
import TvCountries from "./TvCountries";
import TvCreators from "./TvCreators";
import TvSeasons from "./TvSeasons";
import TvRuntime from "./TvRuntime";

const ShowBox = props => {
    let {
        title, release, status, rating, homepage, last_air_date,
        number_of_episodes, number_of_seasons, original_title,
        original_language, popularity,
        genres, languages, origin_country, production_companies,
        created_by, seasons, episode_run_time, networks,
    } = props;

    console.log("watch this:", props);

    return(
        <div className="show_box">
            <SingleBox name="title: " content={title}/>
            <SingleBox name="first release: " content={release}/>
            <SingleBox name="status: " content={status}/>
            <SingleBox name="rating: " content={rating}/>
            <SingleBox name="homepage: " content={homepage}/>
            <SingleBox name="last series: " content={last_air_date}/>
            <SingleBox name="seasons: " content={number_of_seasons}/>
            <SingleBox name="episodes: " content={number_of_episodes}/>
            <SingleBox name="original title: " content={original_title}/>
            <SingleBox name="original language: " content={original_language}/>
            <SingleBox name="popularity: " content={popularity}/>
            <Genres genres={genres}/>
            <Companies companies={production_companies}/>
            <TvLanguages languages={languages}/>
            <TvCountries countries={origin_country}/>
            <TvCreators creators={created_by}/>
            <TvSeasons seasons={seasons}/>
            <TvRuntime runtime={episode_run_time}/>
        </div>
    )
};

export default ShowBox;