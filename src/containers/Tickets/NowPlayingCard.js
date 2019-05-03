import React from "react";
import {DEFAULT_IMG_URL, W500} from "../../const";
import {Link} from "react-router-dom";

const NowPlayingCard = props => {
    const {backdrop_path, title, original_language} = props;
    const IMG = DEFAULT_IMG_URL + W500 + backdrop_path;
    return (
        <Link to={URL}>
            <div className="ticket-card">
                <img src={IMG} alt="POSTER"/>
                <div className="ticket-desc">
                    <h1>{title}({original_language})</h1>
                </div>
            </div>
        </Link>
    )
};

export default NowPlayingCard;