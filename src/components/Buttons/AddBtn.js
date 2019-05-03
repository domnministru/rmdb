import React from "react";

import {Icon} from "semantic-ui-react";

const AddBtn = () => {
    return(
        <button className="button">
            <Icon name="add" size="large" className="button-icon" style={{marginLeft: "6px"}}/>
        </button>
    )
};

export default AddBtn;