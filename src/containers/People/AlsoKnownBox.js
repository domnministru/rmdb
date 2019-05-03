import React from "react";

import "../../styles/pages/_people.scss";

const AlsoKnownBox = props => {
    const {also_known_as} = props;
    let id = 1;

    return(
        <div className="multiline-box">
            <p>Also known as: </p>
            {also_known_as.map(known => {
                return (
                    <h3 key={id++}>{known},</h3>
                )
            })}
        </div>
    )
};

export default AlsoKnownBox;