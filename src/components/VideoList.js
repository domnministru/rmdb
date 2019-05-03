import React, {Component} from "react";
import {connect} from "react-redux";

import {getVideos} from "../actions/getVideosAction";

import Slider from "./Slider";
import VideoCard from "./VideoCard";
import Spinner from "./Spinner";

class VideoList extends Component {
    componentDidMount() {
        this.props.getVideos(this.props.content_type, this.props.id);
    }

    render() {
        const {error, loading, videos} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        return (
            <div className="video-list">
                <Slider
                    items={1}
                    mouseDrag={true}
                    arrowKeys={true}
                    controls={"#customize-controls"}
                    nav={false}
                >
                    {
                        videos.map(video => (
                            <div key={video.id} className="carousel-cell">
                                <VideoCard video={video}/>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    videos: state.videos.videos,
    loading: state.videos.loading,
    error: state.videos.error,
});

const mapDispatchToProps = {
    getVideos
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);