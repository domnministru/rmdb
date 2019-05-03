import React from "react";

const TvCreators = props => {
    let { creators } = props;

    return(
        <div className="multiline-box">
            <p>created by: </p>
            {creators.map(creator => {
                return (
                    <h3 key={creator.id}>{creator.name},</h3>
                )
            })}
        </div>
    )
};

export default TvCreators;