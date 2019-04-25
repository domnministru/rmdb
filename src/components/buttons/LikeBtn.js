import React from "react";
import {Icon} from "semantic-ui-react";
import "../../styles/components/_button.scss"

const LikeBtn = () => {
    return(
        <button className="button">
            <Icon name="like" size="large" className="button_icon"/>
        </button>
    )
};

export default LikeBtn;