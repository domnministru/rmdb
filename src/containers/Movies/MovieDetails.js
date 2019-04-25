import React,{Component} from "react";
import {connect} from "react-redux";
import {getSpecificMovie} from "./modules/getMovieAction";

import MyLoader from "../../components/MyLoader";
import Cast from "../../components/main/ActorsList";
import Body from "../../components/main/Body";
import Presentation from "../../components/main/Presentation";

import "../../styles/components/_details.scss";

class MovieDetails extends Component {
    componentDidMount() {
        this.props.getSpecificMovie(this.props.match.params.id);
    }

    render() {
        const {error, loading, movie, match} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        const {
            id, title, release_date, vote_average, original_title,
            ...rest
        } = movie;

        const content_type = "movie";

        return (
            <div className="details" key={id}>
                <Presentation
                    id={id}
                    title={title}
                    release={release_date}
                    rating={vote_average}
                    {...rest}
                />
                <Cast
                    id={match.params.id}
                    content_type={content_type}
                    {...rest}
                />
                <Body
                    id={id}
                    title={title}
                    release={release_date}
                    rating={vote_average}
                    original_title={original_title}
                    content_type={content_type}
                    {...rest}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.movie,
    loading: state.movie.loading,
    error: state.movie.error,
});

const mapDispatchToProps = {
    getSpecificMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);