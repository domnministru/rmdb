import React,{Component} from "react";
import {connect} from "react-redux";

import {getSpecificMovie} from "./modules/getMovieAction";

import Cast from "../../components/ActorsList";
import Body from "../../components/Body";
import Presentation from "../../components/Presentation";
import Spinner from "../../components/Spinner";

class MoviePage extends Component {
    componentDidMount() {
        this.props.getSpecificMovie(this.props.match.params.id);
    }

    render() {
        const {error, loading, movie, match} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        const {
            id, title, release_date, vote_average, original_title,
            ...rest
        } = movie;

        const content_type = "movie";

        return (
            <div className="details" key={id}>
                <Presentation
                    id={match.params.id}
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
                    id={match.params.id}
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);