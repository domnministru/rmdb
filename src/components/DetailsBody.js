import React from "react";
import {Container} from "semantic-ui-react";
import ObjectInfoBlock from "./ObjectInfoBlock";

import "../styles/components/_detailsBody.scss";

const DetailsBody = props => {

    const {
        genres, homepage, original_language, production_companies, status, original_title,

        budget, revenue, runtime, tagline, production_countries, spoken_languages, popularity,

        created_by, episode_run_time, in_production, languages, last_air_date,
        last_episode_to_air, next_episode_to_air, networks, number_of_episodes,
        number_of_seasons, origin_country, seasons, type
    } = props;

    return (
        <div className="details_body">
            <Container style={{display: "flex"}}>
                <div className="b_info">
                    <ObjectInfoBlock name="Original Title: " content={original_title}/>
                    <ObjectInfoBlock name="Status: " content={status}/>
                    <ObjectInfoBlock name="Original Language: " content={original_language}/>
                    <ObjectInfoBlock name="Home Page: " content={homepage}/>
                    <ObjectInfoBlock name="Popularity: " content={popularity}/>

                    <ObjectInfoBlock name="Tagline: " content={tagline}/>
                    <ObjectInfoBlock name="Runtime(minutes): " content={runtime}/>
                    <ObjectInfoBlock name="Budget: " content={budget}/>
                    <ObjectInfoBlock name="Revenue: " content={revenue}/>

                    <ObjectInfoBlock name="Is in Production: " content={in_production}/>
                    <p style={{color:"red"}}>BE AWARE THAT EVERY MULTIPLE COMPONENT SHOULD BW REWRITTEN</p>
                </div>
                <div className="i_entertainment">
                    <div className="e_videos">
                        <div className="e_video"/>
                        <div className="e_video"/>
                        <div className="e_video"/>
                    </div>
                    <div className="e_pictures">
                        <div className="e_picture"></div>
                        <div className="e_picture"></div>
                        <div className="e_picture"></div>
                        <div className="e_picture"></div>
                        <div className="e_picture"></div>
                    </div>
                    <div className="e_social">

                    </div>
                </div>
            </Container>
        </div>
    )
};

export default DetailsBody;