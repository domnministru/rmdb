import React from "react";
import Proptypes from "prop-types";
import {Link} from "react-router-dom";

import {DEFAULT_IMG_URL, W500} from "../const";

import noImage from "../images/no-img.png";
import {Image} from "semantic-ui-react";
import "../styles/components/_cards.scss"

const ItemCard = props => {
    let {path, title, overview, release, detailsUrl} = props;
    let URL = DEFAULT_IMG_URL + W500 + path;

    return (
        <div className="card movie_show-card">
            <Image className="image"
                   src={
                       path ?
                           (URL) :
                           (noImage)
                   }
            />
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