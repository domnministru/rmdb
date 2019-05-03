import React from "react";

import {DEFAULT_YTB_LINK} from "../const";

import { Player } from "video-react";

const VideoCard = props => {
    const { video: { key }} = props;
    const LINK = DEFAULT_YTB_LINK + key;

    return(
        <div className="vl-card">
            <Player>
                <source src={LINK}/>
            </Player>
        </div>
    )
};

export default VideoCard;