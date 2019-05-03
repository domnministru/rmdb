import React from "react";

import {DEFAULT_IMG_URL, PROFILE_IMG} from "../const";

const ActorCard = props => {
    let { cast: { profile_path, name, character }}= props;
    let IMG = DEFAULT_IMG_URL + PROFILE_IMG + profile_path;

    return(
        <div className="cast-card">
            <div className="cast-image">
                <img src={IMG} alt=""/>
            </div>
            <div className="cast-text">
                <h2>{name}</h2>
                <h3>{character}</h3>
            </div>
        </div>
    )
};

export default ActorCard;