import React from "react";

import {DEFAULT_IMG_URL, W45} from "../../const";

import {Image} from "semantic-ui-react";
import noImage from "../../images/no-img.png"

const Suggestion = props => {
    const {title, release, path, type} = props;
    const URL = DEFAULT_IMG_URL + W45 + path;

    return (
        <div className="suggestion-body">
            <Image className="suggestion-image"
                   src={
                       path ?
                           (URL) :
                           (noImage)
                   }
            />
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