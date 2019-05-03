import React from "react";

import {DEFAULT_IMG_URL, W300} from "../const";

import RateBtn from "./Buttons/RateBtn";
import LikeBtn from "./Buttons/LikeBtn";
import AddBtn from "./Buttons/AddBtn";
import CrewMember from "./CrewMember";
import {Container, Image} from "semantic-ui-react";
import "../styles/components/_presentation.scss"
import "../styles/components/_buttons.scss"

const Presentation = props => {
    const { title, release, overview, poster_path } = props;
    const poster = DEFAULT_IMG_URL + W300 + poster_path;

    return(
        <div className="presentation">
            <Container className="primary-container">
                <div className="presentation-image">
                    <Image src={poster}/>
                </div>
                <div className="presentation-body">
                    <div className="presentation-title"><h1>{title}({release})</h1></div>
                    <div className="presentation-buttons">
                        <LikeBtn/>
                        <AddBtn/>
                        <RateBtn/>
                    </div>
                    <div className="presentation-overview_and_crew">
                        <div className="presentation-overview">
                            <h3>Overview</h3>
                            <p>{overview}</p>
                        </div>
                        <div className="presentation-crew">
                            <h3>Featured Crew</h3>
                            <div className="crew-members">
                                <CrewMember/>
                                <CrewMember/>
                                <CrewMember/>
                                <CrewMember/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Presentation;