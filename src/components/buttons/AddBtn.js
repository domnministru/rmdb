import React from "react";
import {Icon} from "semantic-ui-react";
import "../../styles/components/_button.scss"

const AddBtn = () => {
    return(
        <button className="button">
            <Icon name="add" size="large" className="button_icon" style={{marginLeft: "6px"}}/>
        </button>
    )
};

export default AddBtn;