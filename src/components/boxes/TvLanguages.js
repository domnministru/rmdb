import React from "react";
import "../../styles/components/_boxes.scss"

const TvLanguages = props => {
    let {languages} = props;
    let id = 1;

    return(
        <div className="multiline_box">
            <p>Available Languages: </p>
            {languages.map(language => {
                return (
                    <h3 key={id++}>{language},</h3>
                )
            })}
        </div>
    )
};

export default TvLanguages;