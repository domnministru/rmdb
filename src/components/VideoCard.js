import React from "react";
import ReactPlayer from "react-player";

import {DEFAULT_YTB_LINK} from "../const";

const VideoCard = props => {
    const { video: { key }} = props;
    const URL = DEFAULT_YTB_LINK + key;

    return(
        <div className="vl-card">
            <ReactPlayer
                url={URL}
                controls
            />
        </div>
    )
};

export default VideoCard;