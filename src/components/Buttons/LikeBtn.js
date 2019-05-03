import React from "react";

import {Icon} from "semantic-ui-react";

const LikeBtn = () => {
    return(
        <button className="button">
            <Icon name="like" size="large" className="button-icon"/>
        </button>
    )
};

export default LikeBtn;