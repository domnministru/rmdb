import React from "react";
import Proptypes from "prop-types";

const SingleBox = props => {
    let {name, content} = props;

    return(
        <div className="single-box">
            <p>{name}</p>
            <h2>{content}</h2>
        </div>
    )
};

SingleBox.propTypes = {
    name: Proptypes.string,
    content: Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number
    ])
};

export default SingleBox;