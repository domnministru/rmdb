import React, {Component} from "react";
import {connect} from "react-redux";
import Proptypes from "prop-types";
import ItemCard from "../../components/ItemCard";
import MyLoader from "../../components/MyLoader";
import {getPopularMovies} from "./modules/getMoviesAction";
import {Container} from "semantic-ui-react";

class MoviesList extends Component {
    componentDidMount() {
        this.props.getPopularMovies();
    }

    render() {
        const {error, loading, movies} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        return (
            <Container className="primary-container">
                {movies.map(movie => {
                        return (
                            <ItemCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                release={movie.release_date}
                                score={movie.vote_average}
                                path={movie.poster_path}
                                detailsUrl={`movies/${movie.id}`}
                            />
                        )
                    }

                )}
            </Container>
        )
    }
}

MoviesList.propTypes = {
    key: Proptypes.number,
    title: Proptypes.string,
    overview: Proptypes.string,
    release: Proptypes.string,
    score: Proptypes.string,
    path: Proptypes.string,
};

const mapStateToProps = state => ({
    movies: state.movies.data,
    loading: state.movies.loading,
    error: state.movies.error
});

const mapDispatchToProps = {
    getPopularMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);