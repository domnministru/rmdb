import React from "react";
import "../../styles/components/_boxes.scss"

const MovieLanguages = props => {
    let {languages} = props;

    return(
        <div className="multiline_box">
            <p>Spoken Languages: </p>
            {languages.map(language => {
                return (
                    <h3 key={language.iso_639_1}>{language.name},</h3>
                )
            })}
        </div>
    )
};

export default MovieLanguages;