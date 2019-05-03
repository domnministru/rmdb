import React from "react";
import {DEFAULT_IMG_URL, W154} from "../../const";
import "../../styles/pages/_people.scss"

const KnownForCard = props => {
    const {title, path} = props;
    const IMG = DEFAULT_IMG_URL + W154 + path;

    return (
        <div className="known-for_card">
            <div className="known-for_image">
                <img src={IMG} alt=""/>
            </div>
            <div className="known-for_text">
                <h2>{title}</h2>
            </div>
        </div>
    )
};

export default KnownForCard;