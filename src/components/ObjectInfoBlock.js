import React from "react";
import Proptypes from "prop-types";

const ObjectInfoBlock = props => {
    const {name, content} = props;
    return(
        <div className="info-block">
            <h3 className="name">{name}</h3>
            <h3 className="content">{content}</h3>
        </div>
    )
};

ObjectInfoBlock.propTypes = {
    name: Proptypes.string,
    content: Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number
    ])
};

export default ObjectInfoBlock;