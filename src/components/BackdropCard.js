import React from "react";
import {Image} from "semantic-ui-react";
import {DEFAULT_IMG_URL, W185} from "../const";

const BackdropCard = props => {
    const {file_path} = props;
    const IMG = DEFAULT_IMG_URL + W185 + file_path;

    return(
        <div className="image-card">
            <Image src={IMG}/>
        </div>
    )
};

export default BackdropCard;