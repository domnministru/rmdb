import React from "react";
import {Icon} from "semantic-ui-react";
import "../../styles/components/_button.scss"

const RateBtn = () => {
    return(
        <button className="button">
            <Icon name="star" size="large" className="button_icon"/>
        </button>
    )
};

export default RateBtn;