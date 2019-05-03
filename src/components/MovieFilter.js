import React from "react";
import ControlledDropdown from "./MovieDropdown";

const MovieFilter = props => {
    return(
        <div className="filters">
            <h1 className="type-of-query">Popular Movies</h1>
            <ControlledDropdown/>
        </div>
    )
};

export default MovieFilter;