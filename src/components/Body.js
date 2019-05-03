import React from "react";

import {Container} from "semantic-ui-react";
import MovieBox from "../containers/Movies/MovieBox";
import ShowBox from "./ShowBox";
import VideoList from "./VideoList";
import ImageList from "./ImageList";

const Body = props => {
    const {content_type, id, ...rest} = props;

    return (
        <div className="details-body">
            <Container className="primary-container">
                { content_type === 'movie' ? <MovieBox id={id} {...rest}/> : <ShowBox id={id} {...rest}/> }
                <div className="i-entertainment">
                    <VideoList content_type={content_type} id={id}/>
                    <ImageList content_type={content_type} id={id}/>
                </div>
            </Container>
        </div>
    )
};

export default Body;