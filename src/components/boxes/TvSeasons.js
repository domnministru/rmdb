import React from "react";

const TvSeasons = props => {
    let { seasons } = props;

    return(
        <div className="multiline_box">
            <p>seasons: </p>
            {seasons.map(season => {
                return (
                    <h3 key={season.id}>{season.name}({season.air_date}) - {season.episode_count} episodes,</h3>
                )
            })}
        </div>
    )
};

export default TvSeasons;