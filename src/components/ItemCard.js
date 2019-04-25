import React from "react";
import {Link} from "react-router-dom";
import Proptypes from "prop-types";
import {Image} from "semantic-ui-react";
import {DEFAULT_IMG_URL, BIG_IMG} from "../const";

import "../styles/components/_itemCard.scss"

const ItemCard = props => {
    let {path, title, overview, release, detailsUrl} = props;
    let imageLink = DEFAULT_IMG_URL + BIG_IMG + path;

    return (
        <div className="item-card">
            <Image className="image" src={imageLink}/>

            <div className="content">
                <div className="name">
                    <Link to={detailsUrl}>{title}</Link>
                </div>

                <div className="release">
                    <h2>{release}</h2>
                </div>

                <div className="info">
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    id: Proptypes.number,
    title: Proptypes.string,
    release: Proptypes.string,
    overview: Proptypes.string,
    imageLink: Proptypes.string,
    currentPath: Proptypes.string,
};

export default ItemCard;