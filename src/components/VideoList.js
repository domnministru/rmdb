import React, {Component} from "react";
import {connect} from "react-redux";

import {getVideos} from "../actions/getVideosAction";

import VideoCard from "./VideoCard";
import Slider from "./Slider";
import Spinner from "./Spinner";
import "../styles/components/_slider.scss";
import "../styles/components/_videoList.scss"

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
                <h1> Trailers and Promos </h1>
                <Slider
                    items={1}
                    mouseDrag={false}
                    arrowKeys={false}
                    controls={"#customize-controls"}
                    nav={false}
                >
                    {
                        videos.slice(0,5).map(video => (
                            <VideoCard
                                key={video.id}
                                className="carousel-cell"
                                video={video}
                            />
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