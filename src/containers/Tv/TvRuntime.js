import React from "react";

const TvRuntime = props => {
    let { runtime } = props;
    let id = 1;

    return(
        <div className="multiline-box">
            <p>runtime: </p>
            {runtime.map(runtime => {
                return (
                    <h3 key={id++}>{runtime} min</h3>
                )
            })}
        </div>
    )
};

export default TvRuntime;