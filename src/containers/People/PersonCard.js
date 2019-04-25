import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import {DEFAULT_IMG_URL} from "../../const";
import {MEDIUM_IMG} from "../../const";
import {Icon, Image} from "semantic-ui-react";

import "../../styles/pages/_people.scss"

const PersonCard = props => {
    let { id, name, path, known_for } = props;
    let imageLink = DEFAULT_IMG_URL + MEDIUM_IMG + path;

    return(
        <div className="actor-card">
            <Image className="actor-card_image" src={imageLink}/>

            <div className="actor-card_content">
                <div className="actor-card_name">
                    <Link to={`people/${id}`}>{name}</Link>
                </div>

                <div className='actor-card_info'>
                    <Icon name='film'/>
                    {known_for.map(starred => <i>{starred.title}, </i>)}
                </div>
            </div>
        </div>
    )
};

PersonCard.propTypes = {
    id: Proptypes.number,
    name: Proptypes.string,
    known_for: Proptypes.string,
    imageLink: Proptypes.string,
};

export default PersonCard;