import React from "react";

import {DEFAULT_IMG_URL, W300} from "../../const";

import {Button, Container, Image} from "semantic-ui-react";
import "../../styles/pages/_people.scss";

const PersonPresentation = props => {
    const {name, birthday, deathday, biography = " ", profile_path} = props;
    const IMG = DEFAULT_IMG_URL + W300 + profile_path;

    let string = biography;
    let maxLength = 800;
    let trimmedBIO = string.substring(0,maxLength);
    trimmedBIO = trimmedBIO.substr(0, Math.min(trimmedBIO.length, trimmedBIO.lastIndexOf("."))) + " . . . ";

    return (
        <div className="pp-presentation">
            <Container className="primary-container">
                <div className="presentation-main_picture">
                    <Image src={IMG}/>
                </div>
                <div className="presentation-main_info">
                    <div className="presentation-general">
                        <div className="presentation-name">
                            <h1>{name}</h1>
                            {deathday === null ?
                                (<h1>{birthday}</h1>) :
                                (<h1>{birthday} - {deathday}</h1>)
                            }
                        </div>
                        <div className="presentation-links">
                            <Button circular color="facebook" icon="facebook" className="pp-rounded-buttons"/>
                            <Button circular color="twitter" icon="twitter" className="pp-rounded-buttons"/>
                            <Button circular color="instagram" icon="instagram" className="pp-rounded-buttons"/>
                        </div>
                    </div>
                    <div className="presentation-bio">
                        <h2>Biography</h2>
                        <p>{trimmedBIO}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default PersonPresentation;