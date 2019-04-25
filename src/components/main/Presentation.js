import React from "react";
import {Container, Image} from "semantic-ui-react";
import {BIG_IMG, DEFAULT_IMG_URL} from "../../const";
import RateBtn from "../buttons/RateBtn";
import LikeBtn from "../buttons/LikeBtn";
import AddBtn from "../buttons/AddBtn";
import CrewMember from "../CrewMember";
import "../../styles/components/_detailsHeader.scss";

const Presentation = props => {
    const {
        title, release, overview, poster_path,
    } = props;

    let poster = DEFAULT_IMG_URL + BIG_IMG + poster_path;

    return(
        <div className="details_header">
            <Container className="primary-container">
                <div className="h_picture">
                    <Image src={poster}/>
                </div>
                <div className="h_info">
                    <div className="i_top">
                        <div className="t_caption"><h1>{title}({release})</h1></div>
                    </div>
                    <div className="i_interaction">
                        <LikeBtn/>
                        <AddBtn/>
                        <RateBtn/>
                    </div>
                    <div className="i_body">
                        <div className="b_overview">
                            <h3>Overview</h3>
                            <p>{overview}</p>
                        </div>
                        <div className="b_crew">
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