import React from "react";

const Genres = props => {
    let {genres} = props;

    return (
        <div className="multiline_box">
            <p>Genres: </p>
            {genres.map(genre => {
                return (
                    <h3 key={genre.id}>{genre.name},</h3>
                )
            })}
        </div>
    )
};

export default Genres;