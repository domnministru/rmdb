import React from "react";
import {DEFAULT_IMG_URL} from "../../const";
import {SMALL_IMG} from "../../const";
import {Image} from "semantic-ui-react";
import "../../styles/layout/_search.scss"

const SearchResult = (props) => {

    let title = null;
    let release = null;
    let type = null;

    let imageLink = DEFAULT_IMG_URL + SMALL_IMG + props.path;

    switch (props.media_type) {
        case "movie": {
            type = "Movie";
            break;
        }
        case "tv": {
            type = "TV";
            break;
        }
        case "person": {
            type = "Person";
            break;
        }
        default: {
            type = "TBD";
            break;
        }
    }
    console.log("props:" , props);

    props.title === undefined ?
        (title = "N/A"):
        (title = props.title);

    props.release_date === undefined ?
        (release = "N/A"):
        (release = props.release_date);


    return (
        <div className="suggestion-body">
            <Image className="suggestion-image"
                   src={imageLink}>
            </Image>
            <div className="suggestion-info">
                <div className="suggestion-title">
                    <h2>{title}</h2>
                </div>
                <div className="suggestion-year">
                    <h4>{release}</h4>
                </div>
            </div>
            <div className="suggestion-type">
                {type}
            </div>
        </div>
    );
};

export default SearchResult;