import React from "react";

import {DEFAULT_IMG_URL, W185} from "../const";
import noImage from "../images/no-img.png";

import {Image} from "semantic-ui-react";

const ActorCard = props => {
    let { cast: { profile_path, name, character }}= props;
    let IMG = DEFAULT_IMG_URL + W185 + profile_path;

    return(
        <div className="al-card">
            <Image className="al-image"
                   src={
                       profile_path ?
                           (IMG) :
                           (noImage)
                   }>
            </Image>
            <div className="al-text">
                <h2>{name}</h2>
                <h3>{character}</h3>
            </div>
        </div>
    )
};

export default ActorCard;