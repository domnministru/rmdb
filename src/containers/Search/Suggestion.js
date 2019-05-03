import React from "react";

import {DEFAULT_IMG_URL, SMALL_IMG} from "../../const";

import {Image} from "semantic-ui-react";
import noImage from "../../images/no-img.png"

const Suggestion = props => {
    const {title, release, path, type } = props;
    const imageLink = DEFAULT_IMG_URL + SMALL_IMG + path;

    return (
        <div className="suggestion-body">
            <Image className="suggestion-image"
                   src={
                       path ?
                           (imageLink) :
                           (noImage)
                   }>
            </Image>
            <div className="suggestion-info">
                <div className="suggestion-title">
                    <h2>{title}</h2>
                </div>
                <div className="suggestion-year">
                    <h4>{release}</h4>
                </div>
            </div>
            <div className="suggestion-type">
                {type}
            </div>
        </div>
    );
};

export default Suggestion;