import React from "react";
import "../../styles/components/_boxes.scss"

const TvCountries = props => {
    let {countries} = props;
    let id = 1;

    return (
        <div className="multiline_box">
            <p>Origin Countries: </p>
            {countries.map(country => {
                return (
                    <h3 key={id++}>{country},</h3>
                )
            })}
        </div>
    )
};

export default TvCountries;