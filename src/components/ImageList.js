import React, {Component} from "react";
import {connect} from "react-redux";

import {getImages} from "../actions/getImagesAction";

import Slider from "./Slider";
import Spinner from "./Spinner";
import PosterCard from "./PosterCard";
import BackdropCard from "./BackdropCard";
import "../styles/components/_slider.scss";
import "../styles/components/_imageList.scss";

class ImageList extends Component {
    componentDidMount() {
        this.props.getImages(this.props.content_type, this.props.id);
        console.log("props:",this.props)
    }

    render() {
        const {error, loading, posters, backdrops} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        return (
            <div className="image-list">
                <div className="posters">
                    <h1> Posters </h1>
                    <Slider
                        items={5}
                        mouseDrag={true}
                        arrowKeys={true}
                        controls={"#customize-controls"}
                        nav={false}
                    >
                        {
                            posters.map(poster => (
                                <div key={poster.id} className="carousel-cell">
                                    <PosterCard file_path={poster.file_path}/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="backdrops">
                    <h1> Backdrops </h1>
                    <Slider
                        items={4}
                        mouseDrag={true}
                        arrowKeys={true}
                        controls={"#customize-controls"}
                        nav={false}
                    >
                        {
                            backdrops.map(backdrop => (
                                <div key={backdrop.id} className="carousel-cell">
                                    <BackdropCard file_path={backdrop.file_path}/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    backdrops: state.images.images.backdrops,
    posters: state.images.images.posters,
    loading: state.images.loading,
    error: state.images.error,
});

const mapDispatchToProps = ({
    getImages
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);