import React from "react";
import "../styles/components/_castCard.scss"
import {DEFAULT_IMG_URL, PROFILE_IMG} from "../const";

const ActorCard = props => {
    let { cast: { profile_path, name, character }}= props;
    let IMG = DEFAULT_IMG_URL + PROFILE_IMG + profile_path;

    console.log(props);

    return(
        <div className="cast_card">
            <div className="cast_image">
                <img src={IMG} alt=""/>
            </div>
            <div className="cast_text">
                <h2>{name}</h2>
                <h3>{character}</h3>
            </div>
        </div>
    )
};

export default ActorCard;