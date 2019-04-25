import React from "react";
import {Container} from "semantic-ui-react";
import MovieBox from "../boxes/MovieBox";
import ShowBox from "../boxes/ShowBox";

import "../../styles/components/_detailsBody.scss";

const Body = props => {
    const {content_type, ...rest} = props;

    return (
        <div className="details_body">
            <Container className="primary-container">
                { content_type === 'movie' ? <MovieBox {...rest}/> : <ShowBox {...rest}/> }
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

export default Body;