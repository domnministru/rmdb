import React from "react";

import {DEFAULT_IMG_URL, W154} from "../../const";
import noImage from "../../images/no-img.png";

import {Image} from "semantic-ui-react";
import "../../styles/pages/_people.scss"

const KnownForCard = props => {
    const {title, path} = props;
    const IMG = DEFAULT_IMG_URL + W154 + path;

    return (
        <div className="kf-card">
            <div className="kf-image">
                <Image
                    src={
                        path ?
                            (IMG) :
                            (noImage)
                    }
                />
            </div>
            <div className="kf-text">
                <h2>{title}</h2>
            </div>
        </div>
    )
};

export default KnownForCard;