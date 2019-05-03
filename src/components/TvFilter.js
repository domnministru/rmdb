import React from "react";
import TvDropdown from "./TvDropdown";

const TvFilter = props => {
    return(
        <div className="filters">
            <h1 className="type-of-query">Popular Tv Shows</h1>
            <TvDropdown/>
        </div>
    )
};

export default TvFilter;