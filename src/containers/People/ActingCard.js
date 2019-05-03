import React from "react";
import "../../styles/pages/_people.scss";

const ActingCard = props => {
    const { title, character, year, vote_average } = props;

    if (title) {
        return (
            <div className="movie-card">
                <h2 className="mc-year">{year ? (year.substring(0,4)) : (" - ")}</h2>
                <h2 className="mc-title">{title}</h2>
                <i><h3 className="mc-character">{character ? (character) : (" - ")}</h3></i>
                <h3 className="mc-rating">{vote_average !== 0 ? (vote_average) : (" - ")}</h3>
            </div>
        )
    }

    return (
        <div className="movie-card"/>
    )
};

export default ActingCard;