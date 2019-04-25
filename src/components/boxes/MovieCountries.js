import React from "react";
import "../../styles/components/_boxes.scss"

const MovieCountries = props => {
    let {countries} = props;

    return (
        <div className="multiline_box">
            <p>Production Countries: </p>
            {countries.map(country => {
                return (
                    <h3 key={country.iso_3166_1}>{country.name},</h3>
                )
            })}
        </div>
    )
};

export default MovieCountries;