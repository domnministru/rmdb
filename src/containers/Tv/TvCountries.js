import React from "react";

const TvCountries = props => {
    let {countries} = props;
    let id = 1;

    return (
        <div className="multiline-box">
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