import React from "react";
import "../../styles/pages/_people.scss";

const HeadingCard = props => {
    const {
        department, job,  title, vote_average, year
    } = props;

    if (title) {
        return (
            <div className="heading-card">
                <h2 className="mc-year">{year ? (year.substring(0,4)) : (" - ")}</h2>
                <h2 className="hc-title">{title}</h2>
                <i><h3 className="hc-department">{department}, {job}</h3></i>
                <h3 className="hc-rating">{vote_average !== 0 ? (vote_average) : (" - ")}</h3>
            </div>
        )
    }

    return (
        <div className="heading-card"/>
    )
};

export default HeadingCard;