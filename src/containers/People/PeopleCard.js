import React from "react";
import Proptypes from "prop-types";
import {Link} from "react-router-dom";

import {DEFAULT_IMG_URL, W300} from "../../const";

import {Icon, Image} from "semantic-ui-react";
import "../../styles/pages/_people.scss";
import noImage from "../../images/no-img.png";

const PeopleCard = props => {
    let {id, name, path, known_for} = props;
    let URL = DEFAULT_IMG_URL + W300 + path;

    return (
        <div className="people-card">
            <Image className="people-card_image"
                   src={
                       path ?
                           (URL) :
                           (noImage)
                   }
            />

            <div className="people-card_content">
                <div className="pc-name">
                    <Link to={`person/${id}`}><h4 style={{padding: "0"}}>{name}</h4></Link>
                    <Icon name="film" className="pc-movie-icon"/>
                </div>

                <div className="pc-info">
                    {known_for.map((starred, index) => <i key={index}>{starred.title},&nbsp;&nbsp;</i>)}
                </div>
            </div>
        </div>
    )
};

PeopleCard.propTypes = {
    id: Proptypes.number,
    name: Proptypes.string,
    known_for: Proptypes.array,
    imageLink: Proptypes.string,
};

export default PeopleCard;